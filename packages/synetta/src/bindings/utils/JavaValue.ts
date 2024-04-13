/**
 * We should remember that we're using the `JavetBridgeConverter`
 * so every objects from Java is entirely bridged to V8.
 * 
 * So instead of receiving `number` or `string` directly,
 * we receive a proxy object that we can convert to V8 value.
 */
export default interface JavaValue<T> {
  toV8Value (): T;
}