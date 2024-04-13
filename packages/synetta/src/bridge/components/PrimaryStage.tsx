import { type FlowComponent, createRenderEffect, splitProps, children, spreadProps, onMount } from "../../index.js";
import { CurrentStageContext } from "../contexts/CurrentStage.jsx";
import type Stage from "../../bindings/javafx/stage/Stage.js";
import Scene from "../../bindings/javafx/scene/Scene.js";

const PrimaryStage: FlowComponent<{
  // Will be handled in this component by effects.
  instance: Stage
  show?: boolean

  // Will be passed to the Scene instance.
  title: string
}> = (props) => {
  const [p, rest] = splitProps(props, ["children", "instance", "show"])

  const child = children(() => (
    <CurrentStageContext.Provider value={p.instance} children={p.children} />
  ));

  createRenderEffect(() => {
    const c = child();

    if (c instanceof Scene) p.instance.scene = c;
    else throw new Error("Instance of PrimaryStage must be a Scene.");
  });

  createRenderEffect(() => spreadProps(p.instance, rest));

  onMount(() => {
    if (p.show) p.instance.show();
    else p.instance.hide();
  });

  return p.instance;
};

export default PrimaryStage;
