import SceneBridge from "../../bindings/javafx/scene/Scene.js";
import type JavaObject from "../../bindings/java/lang/Object.js";
import { createRenderEffect, mergeProps, splitProps, type FlowComponent } from "../../index.js";

const Scene: FlowComponent<{
  width: number
  height: number
}> = (props) => {
  const [p, rest] = splitProps(props, ["children", "width", "height"]);
  
  const node = new SceneBridge(p.children as JavaObject, p.width, p.height);
  console.debug("[Scene]: new SceneBridge()");
  
  createRenderEffect(() => mergeProps(node, rest));
  return node;
};

export default Scene;
