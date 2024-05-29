import LabelBridge from "../../bindings/javafx/scene/control/Label.js";
import { createRenderEffect, spreadProps, type VoidComponent } from "../../index.js";

const Label: VoidComponent<{
  text: string
}> = (props) => {
  const node = LabelBridge.__new();

  createRenderEffect(() => (
    spreadProps(node, props)
  ));

  return node;
};

export default Label;
