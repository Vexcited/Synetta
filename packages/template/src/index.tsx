import {
  // Main entry point for the Synetta application.
  renderApplication,

  // Re-exports from SolidJS
  createSignal,
  For
} from "synetta";

import {
  PrimaryStage,
  Button,
  Label,
  Scene,
  VBox
} from "synetta/bridge";

renderApplication((stage) => {
  const [count, setCount] = createSignal(0);

  try {
  return (<PrimaryStage instance={stage} title="Counting app !" show>
    <Scene width={500} height={200}>
      <VBox>
        <Button onMouseClicked={() => setCount(prev => prev + 1)}>
          Increment
        </Button>
        <Button onMouseClicked={() => setCount(prev => prev - 1)}>
          Decrement
        </Button>

        <Label>
          Value: {count().toString()}
        </Label>

        <For each={new Array(count() >= 0 ? count() : 0).fill(null)}>
          {
            (_, i) => (
              <Label>
                {(i() + 1).toString()}
              </Label>
            )
          }
        </For>
      </VBox>
    </Scene>
  </PrimaryStage>);
  }
  catch (e) {
    console.error(e);
  }
});
