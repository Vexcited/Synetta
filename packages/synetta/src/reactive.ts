import { createRoot } from "solid-js";
import { Stage } from "./bridge/index.js";

export const handleApp = (code: (stage: Stage) => void) => (_stage: any) => {
  const stage = Stage._fromBridged(_stage);
  
  createRoot(() => {
    code(stage);
  });
}
