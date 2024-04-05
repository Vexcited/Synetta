import {
  type Component,
  
  handleApp,
  createSignal,
  createEffect,
  onMount
} from "synetta";

import StageContext from "./components/StageContext";

const MyComponent: Component<{ value: string }> = (props) => {
  createEffect(() => {
    console.info("MyComponent received a new 'value': " + props.value);
  });

  return <></>;
}

export default handleApp((stage) => {
  const [value, setValue] = createSignal("Hello Synetta! We're still on initialization value.");
    
  onMount(() => {
    console.info("App is mounted !");

    setInterval(() => {
      console.info("Will update 'value' with: " + value());
      setValue("Hello Synetta! We're now @ " + Date.now());
    }, 100);
  });

  <StageContext instance={stage} title={value()} show>
    <MyComponent value={value()} />
  </StageContext>
});
