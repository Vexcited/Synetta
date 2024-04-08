import { createRenderer } from "solid-js/universal";
import type { Accessor, Component } from "./index.js";
import type JSBridge from "./bridge/utils/JSBridge.js";

export declare namespace JSX {
  type Element = JSBridge;
  type ArrayElement = Element[];
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
} = createRenderer<JSBridge>({
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
    throw new TypeError("Couldn't set property: " + name + " to: " + value);
  },
  
  insertNode(parent, node, anchor) {
    console.debug('render', parent, node)
    if(!parent){
      console.debug('no parent found!', node)
    }
    console.debug('inserting node', node);
  },

  isTextNode(node) {
    return false; // Since not implemented.
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
