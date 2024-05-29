import {
  // Main entry point for the Synetta application.
  renderApplication,

  // Re-export from SolidJS.
  createSignal,

  // Re-exports from SolidJS with different typings.
  Switch,
  Match,
  For,
  Show,
  Index
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
  
  const reversedListOfIntegers = () => {
    return new Array(count() >= 0 ? count() : 0)
      .fill(null)
      .map((_, index) => index)
      .toReversed();
  };

  const indexedIntegers = () => {
    const map = [
      // positive
      [] as number[],
      // negative
      [] as number[]
    ];

    for (let i = 0; i < count(); i++) {
      map[0].push(i);
    }

    for (let i = count(); i < 0; i++) {
      map[1].push(i);
    }

    return map;
  }

  return (
    <PrimaryStage instance={stage} title="Counting app !" show>
      <Scene width={500} height={200}>
        <VBox>
          <Button
            onMouseClicked={() => setCount(prev => prev + 1)}
            text="Increment"
          />

          <Button
            onMouseClicked={() => setCount(prev => prev - 1)}
            text="Decrement"
          />

          <Label text={`Counter is currently at ${count()}`} />

          <Switch>
            <Match when={count() > 0}>
              <Label text="You're a positive counter !" />
            </Match>
            <Match when={count() < 0}>
              <Label text="You're a negative counter !" />
            </Match>
          </Switch>
          
          <Show when={count() > 15}>
            <Label text="Count is greater than 15 !" />
          </Show>

          <For each={reversedListOfIntegers()}>
            {(i) => (
              <Label text={i.toString()} />
            )}
          </For>

          <Index each={indexedIntegers()}>
            {(list, index) => (
              <VBox>
                <Label text={`Integers ${index === 0 ? "positive" : "negative"} :`} />
                
                <For each={list()}>
                  {(i) => (
                    <Label text={i.toString()} />
                  )}
                </For>
              </VBox>
            )}
          </Index>
        </VBox>
      </Scene>
    </PrimaryStage>
  );
});
