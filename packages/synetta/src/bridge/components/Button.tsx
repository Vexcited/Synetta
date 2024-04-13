import ButtonBridge from "../../bindings/javafx/scene/control/Button.js";
import { createRenderEffect, mergeProps, splitProps, spreadProps, type Component } from "../../index.js";

const Button: Component<{
  children?: string | (string | (() => string))[]
  onMouseClicked?: (e: any) => void
}> = (props) => {
  const [p, rest] = splitProps(props, ["children"]);
  
  const node = new ButtonBridge();
  console.debug("[Button]: new ButtonBridge()");

  createRenderEffect(() => (
    spreadProps(node, mergeProps({
      get text() {
        return p.children;
      }
    }, rest))
  ));

  return node;
};

export default Button;

