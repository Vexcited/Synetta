import VBoxBridge from "../../bindings/javafx/scene/layout/VBox.js";
import { children, createEffect, createRenderEffect, splitProps, spreadProps, type Component, type JSX } from "../../index.js";
import type ObservableList from "../../bindings/javafx/collections/ObservableList.js";
import { Object } from "../../bindings/index.js";
import getJavaObject from "../../bindings/utils/getJavaObject.js";

const tryToGetChildren = (child: ObservableList<any>, i: number): Object | null => {
  try {
    let c = child.get(i);
    return new Object(c);
  }
  catch { return null; }
}

const VBox: Component<{ children?: JSX.Element | JSX.Element[] }> = (props) => {
  const [p, rest] = splitProps(props, ["children"]);
  const childrenMemo = children(() => p.children);
  const node = new VBoxBridge();
    
  createEffect(() => {
    const newChildren = childrenMemo.toArray();
    const oldChildrenLength = node.getChildren().size();
    
    const elementsToRemove: any[] = [];
    for (let i = 0; i < oldChildrenLength; i++) {
      const oc = tryToGetChildren(node.getChildren(), i);
      // if there's no original, there's nothing to remove :D
      if (!oc) continue;

      let keep = false;

      for (const nc of newChildren) {
        // should be an instance of bridge, let's roll
        if (nc instanceof Object) {
          if (oc.hashCode() === nc.hashCode()) {
            keep = true;
            break;
          }
        }
      }

      if (!keep) {
        elementsToRemove.push(getJavaObject(oc));
      }
    }

    node.getChildren().removeAll(...elementsToRemove);

    for (let i = 0; i < newChildren.length; i++) {
      const nc = newChildren[i];
      const oc = tryToGetChildren(node.getChildren(), i);

      if (nc instanceof Object) {
        if (oc && oc.hashCode() === nc.hashCode()) continue;
        node.getChildren().add(i, getJavaObject(nc));
      }
    }
  });

  console.debug("[VBox]: new VBoxBridge()");
  
  createRenderEffect(() => spreadProps(node, rest));
  return node;
};

export default VBox;
