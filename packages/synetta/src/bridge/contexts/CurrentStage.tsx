import { createContext, useContext } from "../../index.js";
import type Stage from "../../bindings/javafx/stage/Stage.js";

export const CurrentStageContext = /* @__PURE__ */ createContext<Stage>();

/**
 * Get nearest {@link CurrentStageContext} value on tree.
 * 
 * @throws
 * - `ReferenceError` if {@link CurrentStageContext} is unset, since it should always
 * be set by a {@link PrimaryStage} component.
 * 
 * @returns
 * Value from {@link CurrentStageContext}
 */
export function useCurrentStage(): Stage {
  const stage = useContext(CurrentStageContext);
  if (!stage) {
    throw new ReferenceError("Could not find CurrentStageContext on tree.");
  }
  
  return stage;
}
