import {
  // Main entry point for the Synetta application.
  renderApplication,

  // Re-exports from SolidJS
  type Component,
  createSignal,
  createEffect,
  onMount
} from "synetta";

import StageContext from "./components/StageContext";
import { Label, Scene, StackPane } from "synetta/bridge";

const MyComponent: Component<{ value: string }> = (props) => {
  createEffect(() => {
    console.info("MyComponent received a new 'value': " + props.value);
  });

  return <></>;
}

renderApplication((stage) => {
  const [value, setValue] = createSignal("Hello Synetta! We're still on initialization value.");
    
  onMount(() => {
    console.info("App is mounted !");

    stage.setScene(new Scene(new Label("Hello, Synetta!"), 1280, 720));

    setInterval(() => {
      // @ts-ignore
      javafx.application.Platform.runLater(function () {
        console.info("Will update 'value' with: " + value());
        setValue("Hello Synetta! We're now @ " + Date.now());
      })
    }, 1000);
  });

  <StageContext instance={stage} title={value()} show>
    <MyComponent value={value()} />
  </StageContext>
});
