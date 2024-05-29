import ButtonBridge from "../../bindings/javafx/scene/control/Button.js";
import { createRenderEffect, spreadProps, type Component } from "../../index.js";

const Button: Component<{
  text: string
  onMouseClicked?: (e: any) => void
}> = (props) => {
  const node = ButtonBridge.__new();

  createRenderEffect(() => (
    spreadProps(node, props)
  ));

  return node;
};

export default Button;
