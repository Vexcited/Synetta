import { createRenderer } from "solid-js/universal";
import type { Accessor, Component } from "./index.js";
import JavaObject from "./bindings/java/lang/Object.js";

export declare namespace JSX {
  type Element = JavaObject | ArrayElement | (string & {}) | undefined;
  interface ArrayElement extends Array<Element> {}
  interface ElementClass {
    // empty, libs can define requirements downstream
  }
  interface ElementAttributesProperty {
    // empty, libs can define requirements downstream
  }
  type ElementType = Element | ArrayElement | Component<any> | Accessor<Element>

  interface ElementChildrenAttribute {
    children: {};
  }

  interface IntrinsicElements {}
}

export const {
  effect,
  memo,
  createComponent,
  createElement,
  createTextNode,
  insertNode,
  insert,
  spread,
  setProp,
  mergeProps
} = createRenderer<JavaObject>({
  createElement(name) {
    throw new TypeError("Couldn't create element for: " + name);
  },
  
  createTextNode(value) {
    throw new TypeError("Couldn't create text node for: " + value);
  },

  replaceText(textNode, value) {
    throw new TypeError("Since there's no text node, couldn't replace text. Please report this issue on the GitHub.");
  },

  setProperty(node, name, value) {
    if (node instanceof JavaObject) {
      // @ts-expect-error : we use the power of class' `set` to update the properties.
      node[name] = value;
    } else throw new TypeError("(synetta/jsx-runtime): Couldn't 'setProperty' on '" + name + "' to value '" + value + "' : given node is not an instance of JSBridge.");
  },
  
  insertNode(parent, node, anchor) {
    throw new TypeError("(synetta/jsx-runtime): `insertNode` not implemented.");
  },

  isTextNode(node) {
    return false;
  },

  removeNode(parent, node) {
    console.debug('remove', parent, node)
  },

  getParentNode(node) {
    return undefined;
  },

  getFirstChild(node) {
    return undefined;
  },
  
  getNextSibling(node) {
    return undefined;
  }
});
