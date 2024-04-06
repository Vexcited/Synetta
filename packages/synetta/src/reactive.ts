import { createRoot } from "solid-js";
import { Stage } from "./bridge/index.js";

export const renderApplication = (code: (stage: Stage) => void) => {
  // @ts-expect-error : Not typed, yet.
  const stage = Stage._fromBridged(globalThis.__PRIMARY_STAGE__);
  
  createRoot(() => {
    code(stage);
  });
}
