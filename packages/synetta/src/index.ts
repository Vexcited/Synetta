// Polyfill for `solid-js`.
import "core-js/actual/queue-microtask.js";

import type { JSX } from "./jsx-runtime.js";
export type { JSX } from "./jsx-runtime.js";
export { spread as spreadProps } from "./jsx-runtime.js";

export {
  ErrorBoundary,
  createSignal,
  createEffect,
  createMemo,
  createComputed,
  createReaction,
  createRenderEffect,
  createResource,
  createDeferred,
  createUniqueId,
  catchError,
  onMount,
  onCleanup,
  untrack,
  splitProps,
  startTransition,
  useTransition,
  observable,
  from,
  mapArray,
  indexArray,
  lazy,
  createSelector,
  batch,
  on,
  createRoot,
  getOwner,
  runWithOwner,
  mergeProps,
  
  // Index
} from "solid-js";

export type { Accessor, AccessorArray, Setter, Owner } from "solid-js";

export { renderApplication, children, useContext, createContext, type Context } from "./reactive.js";

import type { Accessor } from "solid-js";
import { For as ForOriginal, Switch as SwitchOriginal, Match as MatchOriginal, Show as ShowOriginal, Index as IndexOriginal } from "solid-js";

declare function ForT<T extends readonly any[], U extends JSX.Element>(props: {
  each: T | undefined | null | false;
  fallback?: JSX.Element;
  children: (item: T[number], index: Accessor<number>) => U;
}): JSX.Element;

export const For = ForOriginal as typeof ForT;

declare function SwitchT(props: {
  fallback?: JSX.Element;
  children: JSX.Element;
}): JSX.Element;

export const Switch = SwitchOriginal as typeof SwitchT;

type RequiredParameter<T> = T extends () => unknown ? never : T;

declare function ShowT<
  T,
  TRenderFunction extends (item: Accessor<NonNullable<T>>) => JSX.Element
>(props: {
  when: T | undefined | null | false;
  keyed?: false;
  fallback?: JSX.Element;
  children: JSX.Element | RequiredParameter<TRenderFunction>;
}): JSX.Element;
declare function ShowT<
  T,
  TRenderFunction extends (item: NonNullable<T>) => JSX.Element
>(props: {
  when: T | undefined | null | false;
  keyed: true;
  fallback?: JSX.Element;
  children: JSX.Element | RequiredParameter<TRenderFunction>;
}): JSX.Element;

export const Show = ShowOriginal as typeof ShowT;

declare function MatchT<
  T,
  TRenderFunction extends (item: Accessor<NonNullable<T>>) => JSX.Element
>(props: {
  when: T | undefined | null | false;
  keyed?: false;
  children: JSX.Element | RequiredParameter<TRenderFunction>;
}): JSX.Element;
declare function MatchT<
  T,
  TRenderFunction extends (item: NonNullable<T>) => JSX.Element
>(props: {
  when: T | undefined | null | false;
  keyed: true;
  children: JSX.Element | RequiredParameter<TRenderFunction>;
}): JSX.Element;

export const Match = MatchOriginal as typeof MatchT;

declare function IndexT<T extends readonly any[], U extends JSX.Element>(props: {
  each: T | undefined | null | false;
  fallback?: JSX.Element;
  children: (item: Accessor<T[number]>, index: number) => U;
}): JSX.Element;

export const Index = IndexOriginal as typeof IndexT;

/**
 * General component type without implicit `children` prop.
 */
export type Component<P = {}> = (props: P) => JSX.Element;

/**
 * Extend props to forbid the `children` prop. Prevent passing `children` by chance.
 */
export type VoidProps<P = {}> = P & {
  children?: never;
};

/**
 * Component type forbids `children` prop.
 */
export type VoidComponent<P = {}> = Component<VoidProps<P>>;

/**
 * Extend props to allow optional `children` prop with {@link JSX.Element}.
 */
export type ParentProps<P = {}> = P & {
    children?: JSX.Element;
};

/**
 * Component type allows optional `children` prop with {@link JSX.Element}.
 */
export type ParentComponent<P = {}> = Component<ParentProps<P>>;

/**
 * Extend props to require `children` prop with specific type `C`.
 */
export type FlowProps<P = {}, C = JSX.Element> = P & {
    children: C;
};

/**
 * Component type requires specific type for `children` prop.
 */
export type FlowComponent<P = {}, C = JSX.Element> = Component<FlowProps<P, C>>;

export type ValidComponent = keyof JSX.IntrinsicElements | Component<any>;

/**
 * Props type of component type.
 */
export type ComponentProps<T extends ValidComponent> = T extends Component<
    infer P
>
    ? P
    : T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : Record<string, unknown>;

/**
 * Types of `props.ref`
 */
export type Ref<T> = T | ((val: T) => void);
