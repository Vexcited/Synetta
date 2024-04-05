import { createEffect, type FlowComponent } from "synetta"
import { Stage } from "synetta/bridge"

const StageContext: FlowComponent<{
  instance: Stage
  title: string
  show?: boolean
}> = (props) => {
  createEffect(() => {
    props.instance.setTitle(props.title)
    if (props.show) props.instance.show();
  });

  return props.children;
};

export default StageContext;
