import VBoxBridge from "../../bindings/javafx/scene/layout/VBox.js";
import getJavaObject from "../../bindings/utils/getJavaObject.js";
import { Object } from "../../bindings/index.js";
import { listTryGetChildren } from "../../bindings/utils/list-helpers.js";

import { 
  children,
  createEffect,
  createRenderEffect,
  splitProps,
  spreadProps,
  
  type Component,
  type JSX
} from "../../index.js";

const VBox: Component<{ spacing?: number, children?: JSX.Element | JSX.Element[] }> = (props) => {
  const [p, rest] = splitProps(props, ["children"]);
  const childrenMemo = children(() => p.children);
  
  const node = VBoxBridge.__new();
  const nodeChildrenCollection = node.getChildren();
    
  createEffect(() => {
    const children = (childrenMemo.toArray() as any[]).filter(child => typeof child?._bridged !== "undefined")
    const childrenHashCodes = new Set(children.map(child => child.hashCode()));

    for (let i = 0; i < children.length; i++) {
      const nc = getJavaObject(children[i]);

      if (!nodeChildrenCollection.contains(nc).toV8Value()) {
        nodeChildrenCollection.add(i, nc);
      }
    }

    const bridgesToRemove: Object[] = [];
    const nodeChildrenCollectionSize = nodeChildrenCollection.size();

    for (let i = 0; i < nodeChildrenCollectionSize; i++) {
      const oc = listTryGetChildren(nodeChildrenCollection, i);
      if (!oc) continue;

      if (!childrenHashCodes.has(oc.hashCode())) {
        bridgesToRemove.push(oc);
      }
    }

    if (bridgesToRemove.length > 0) {
      node.getChildren().removeAll(...bridgesToRemove.map(
        (o) => getJavaObject(o)
      ));
    }
  });

  createRenderEffect(() => spreadProps(node, rest));
  return node;
};

export default VBox;
