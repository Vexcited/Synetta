import type JavaValue from "../../utils/JavaValue.js";
import getJavaObject from "../../utils/getJavaObject.js";

/**
 * Class `Object` is the root of the class hierarchy.
 * Every class has `Object` as a superclass. All objects, including arrays, implement the methods of this class.
 * 
 * ## Synetta implementation notes
 * 
 * It takes a bridge instance as a parameter
 * that is then stored in `this._bridged`.
 * 
 * Instead of reading `this._bridged` directly,
 * you should use `getJavaObject(this)`, to make the code more readable.
 */
export default class Object {
  // @ts-expect-error : not typed.
  static readonly #Bridge = java.lang.Object;

  public static __new (): Object {
    return new Object(new Object.#Bridge());
  }

  constructor (public _bridged: any) {}

  /**
   * Returns a hash code value for the object.
   */
  public hashCode (): number {
    const proxy: JavaValue<number> = getJavaObject(this).hashCode();
    return proxy.toV8Value();
  }

  public equals (obj: Object): boolean {
    const proxy: JavaValue<boolean> = getJavaObject(this).equals(getJavaObject(obj));
    return proxy.toV8Value();
  }

  public toString (): string {
    const proxy: JavaValue<string> = getJavaObject(this).toString();
    return proxy.toV8Value();
  }
}