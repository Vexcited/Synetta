/// This file is a part where we rewrite a bit the `src/reactive/signal.ts` of Solid.
/// Mostly because of typings issues and some other things.

import type { JSX } from "./jsx-runtime.js";
import { createMemo, type Accessor, createRoot, untrack, getOwner, type Owner, type FlowComponent, createRenderEffect, type FlowProps } from "./index.js"

import Stage from "./bindings/javafx/stage/Stage.js";

export const renderApplication = (code: (stage: Stage) => void) => {
  // @ts-expect-error : not typed.
  const primaryStage = globalThis.__PRIMARY_STAGE__;
  const stage = new Stage(primaryStage);
  
  createRoot(() => {
    code(stage);
  });
}

function lookup(owner: Owner | null, key: symbol | string): any {
  return owner
    ? owner.context && owner.context[key] !== undefined
      ? owner.context[key]
      : lookup(owner.owner, key)
    : undefined;
}

function resolveChildren(children: JSX.Element | Accessor<any>): ResolvedChildren {
  if (typeof children === "function" && !children.length) return resolveChildren(children());
  if (Array.isArray(children)) {
    const results: any[] = [];
    for (let i = 0; i < children.length; i++) {
      const result = resolveChildren(children[i]);
      Array.isArray(result) ? results.push.apply(results, result) : results.push(result);
    }
    return results;
  }
  return children as ResolvedChildren;
}

export type ResolvedJSXElement = Exclude<JSX.Element, JSX.ArrayElement>;
export type ResolvedChildren = ResolvedJSXElement | ResolvedJSXElement[];
export type ChildrenReturn = Accessor<ResolvedChildren> & { toArray: () => ResolvedJSXElement[] };

/**
 * Resolves child elements to help interact with children
 *
 * @param fn an accessor for the children
 * @returns a accessor of the same children, but resolved
 */
export function children (fn: Accessor<JSX.Element>): any {
  // const children = createMemo(fn, undefined, { equals: bridgeEquals });
  const children = createMemo(fn);
  const memo = createMemo(() => resolveChildren(children()));
  
  (memo as ChildrenReturn).toArray = () => {
    const c = memo();
    return Array.isArray(c) ? c : c != null ? [c] : [];
  };

  return memo as ChildrenReturn;
}

/**
 * Check if two bridges or a bridge array is equal.
 *
 * We're checking using `hashCode()` for bridges.
 * When testing something else than bridge, we use `===`.
 *
 * @param a Bridge or bridge array.
 * @param b Bridge or bridge array.
 */
// export function bridgeEquals(a: unknown, b: unknown): boolean {
//   if (Array.isArray(a) && Array.isArray(b)) {
//     if (a.length == b.length) {
//       for (let i = 0; i < a.length; i++) {
//         if (a[i] instanceof JavaObject && b[i] instanceof JavaObject) {
//           // Compare using `hashCode`.
//           if ((a[i] as JavaObject).hashCode() !== (b[i] as JavaObject).hashCode()) {
//             return false;
//           }
//         }
//         else {
//           // Compare using JS reference.
//           if (a[i] !== b[i]) {
//             return false;
//           }
//         }
//       }
      
//       return true;
//     }

//     return false;
//   }

//   if (a instanceof JavaObject && b instanceof JavaObject) {
//     // Compare using `hashCode`.
//     return (a as JavaObject).hashCode() === (b as JavaObject).hashCode();
//   }

//   return a === b;
// }


export interface EffectOptions {
  name?: string;
}

function createProvider(id: symbol, options?: EffectOptions) {
  return function provider(props: FlowProps<{ value: unknown }, JSX.Element | undefined>) {
    let res;
    createRenderEffect(
      () =>
        (res = untrack(() => {
          const Owner = getOwner();
          Owner!.context = { [id]: props.value };
          return children(() => props.children);
        })),
      undefined,
      options
    );
    return res! as unknown as JSX.Element;
  };
}

export type ContextProviderComponent<T> = FlowComponent<
  { value: T },
  JSX.Element | undefined
>;

// Context API
export interface Context<T> {
  id: symbol;
  Provider: ContextProviderComponent<T>;
  defaultValue: T;
}

/**
* Creates a Context to handle a state scoped for the children of a component
* ```typescript
* interface Context<T> {
*   id: symbol;
*   Provider: FlowComponent<{ value: T }>;
*   defaultValue: T;
* }
* export function createContext<T>(
*   defaultValue?: T,
*   options?: { name?: string }
* ): Context<T | undefined>;
* ```
* @param defaultValue optional default to inject into context
* @param options allows to set a name in dev mode for debugging purposes
* @returns The context that contains the Provider Component and that can be used with `useContext`
*/
export function createContext<T>(
  defaultValue?: undefined,
  options?: EffectOptions
): Context<T | undefined>;
export function createContext<T>(
  defaultValue: T,
  options?: EffectOptions
): Context<T>;
export function createContext<T>(
  defaultValue?: T,
  options?: EffectOptions
): Context<T | undefined> {
  const id = Symbol("context");
  return { id, Provider: createProvider(id, options), defaultValue };
}

/**
* use a context to receive a scoped state from a parent's Context.Provider
*
* @param context Context object made by `createContext`
* @returns the current or `defaultValue`, if present
*
* @description https://www.solidjs.com/docs/latest/api#usecontext
*/
export function useContext<T>(context: Context<T>): T {
  let ctx;
  return (ctx = lookup(getOwner(), context.id)) !== undefined
      ? ctx
      : context.defaultValue;
}

/**
* Apply `value` as `context` on `scope`.
*/
export function applyContext<T, R>(
  context: Context<T>,
  value: T,
  scope: Accessor<R>
): Accessor<R> {
  return createMemo(() => {
    untrack(() => {
      const owner = getOwner();
      owner!.context = { [context.id]: value };
    });

    return scope();
  });
}
