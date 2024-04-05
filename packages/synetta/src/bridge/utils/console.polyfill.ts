// @ts-expect-error : `print` is not correctly typed globally.
const prefixedLogger = (level: string) => (...args: any[]) => print(`[${level.toUpperCase()}]`, ...args);

// @ts-expect-error : We redefine console to print to the console using the `print` bridge.
globalThis.console = {
  info: prefixedLogger("info"),
  warn: prefixedLogger("warn"),
  log: prefixedLogger("log"),
  error: prefixedLogger("error"),
  debug: prefixedLogger("debug"),
  trace: prefixedLogger("trace")
};
