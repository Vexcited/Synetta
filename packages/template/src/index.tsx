import {
  type Component,
  type FlowComponent,
  
  handleApp,
  createSignal,
  createEffect,
  onMount
} from "synetta";

const AComp: Component<{ value: string }> = (props) => {
  createEffect(() => {
    console.info("Reactive 'value': " + props.value);
  });

  return <></>;
}

const Wrapper: FlowComponent = (props) => {
  return props.children;
};

export default handleApp((stage) => {
  const [val, setVal] = createSignal("Hello, Synetta! (from boot)");
    
  onMount(() => {
    stage.show();

    setInterval(() => {
      setVal("Hello, Synetta! " + new Date().toISOString());
    }, 1000);
  });

  <Wrapper>
    <AComp value={val()} />
  </Wrapper>
});
