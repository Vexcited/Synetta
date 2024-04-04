import { createRoot } from "solid-js";

export function startApp (code: () => void) {
  let disposer: () => void;
  createRoot((d) => {
    disposer = d;
    code();
  });

  return disposer!;
}