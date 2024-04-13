import LabelBridge from "../../bindings/javafx/scene/control/Label.js";
import { createRenderEffect, mergeProps, splitProps, spreadProps, type Component } from "../../index.js";

const flatAndRun = (children?: string | (string | (() => string))[]): string => {
  return Array.isArray(children) ? children.map((c) => {
    if (typeof c === "string") return c;
    else return c();
  }).join("") : children || "";
}

const Label: Component<{ children?: string | (string | (() => string))[] }> = (props) => {
  const [p, rest] = splitProps(props, ["children"]);
  
  const node = new LabelBridge();
  console.debug("[Label]: new LabelBridge()");

  createRenderEffect(() => (
    spreadProps(node, mergeProps({
      get text() {
        return flatAndRun(p.children);
      }
    }, rest))
  ));

  return node;
};

export default Label;
