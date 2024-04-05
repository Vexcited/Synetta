/// Taken from <https://gist.github.com/AndersonFirmino/ebb45ee54e60c8bfba35fb3097ec15ef>
import JSBridge, { getJavaObject } from "./JSBridge.js";

const TimerBridge = Java.type('java.util.Timer');
const TimerTaskBridge = Java.type('java.util.TimerTask');
const PolyfillTimerTaskBridge = Java.extend(TimerTaskBridge);
const Platform = Java.type('javafx.application.Platform');

/**
 * Timer class to handle scheduling tasks.
 * @see https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Timer.html
 */
class Timer extends JSBridge {
  constructor (name: string, isDaemon: boolean) {
    const bridge = new TimerBridge(name, isDaemon);
    super(bridge);
  }

  public schedule (task: PolyfillTimerTask, delay: number, period?: number): void {
    if (typeof period === 'number')
      getJavaObject(this).schedule(getJavaObject(task), delay, period);
    
    // Regular `setTimeout` or `setImmediate`
    else getJavaObject(this).schedule(getJavaObject(task), delay);
  }

  public cancel (): void {
    getJavaObject(this).cancel();
  }
}
/**
 * @see https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TimerTask.html
 */
class PolyfillTimerTask extends JSBridge {
  constructor (run: () => void) {
    const bridge = new PolyfillTimerTaskBridge({
      run: () => Platform.runLater(() => run())
    });
    super(bridge);
  }
}

function toCompatibleNumber (val: number): number {
  switch (typeof val) {
    case 'number':
      break;
    case 'string':
      val = parseInt(val, 10);
      break;
    case 'boolean':
    case 'object':
      val = 0;
      break;
  }

  return val > 0 ? val : 0;
}

const setTimerRequest = (handler: () => void, delay: number, interval: number, args: any[]): Timer => {
  handler = handler || function () {};
  delay = toCompatibleNumber(delay);
  interval = toCompatibleNumber(interval);

  const task = new PolyfillTimerTask(() => {
    // @ts-expect-error
    handler.apply(null, args);
  });

  let timer: Timer;
  if (interval > 0) {
    timer = new Timer('setIntervalRequest', true);
    timer.schedule(task, delay, interval);
  }
  else {
    timer = new Timer('setTimeoutRequest', false);
    timer.schedule(task, delay);
  }

  return timer;
}

const clearTimerRequest = (timer: Timer) => timer.cancel();

// @ts-expect-error
globalThis.setInterval = function setInterval (): Timer {
  const args = Array.prototype.slice.call(arguments);
  const handler = args.shift();
  const ms = args.shift();

  return setTimerRequest(handler, ms, ms, args);
};

// @ts-expect-error
globalThis.clearInterval = function clearInterval (timer: Timer) {
  clearTimerRequest(timer);
};

// @ts-expect-error
globalThis.setTimeout = function setTimeout (): Timer {
  const args = Array.prototype.slice.call(arguments);
  const handler = args.shift();
  const ms = args.shift();

  return setTimerRequest(handler, ms, 0, args);
};

// @ts-expect-error
globalThis.clearTimeout = function clearTimeout (timer: Timer) {
    clearTimerRequest(timer);
};

// @ts-expect-error
globalThis.setImmediate = function setImmediate(): Timer {
  const args = Array.prototype.slice.call(arguments);
  const handler = args.shift();

  return setTimerRequest(handler, 0, 0, args);
};

// @ts-expect-error
globalThis.clearImmediate = function clearImmediate (timer: Timer) {
  clearTimerRequest(timer);
};
