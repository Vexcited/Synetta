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
  public _bridged: any
  constructor (_bridged: any) {
    this._bridged = _bridged;
  }

  /**
   * Returns a hash code value for the object.
   */
  public hashCode (): number {
    const proxy = getJavaObject(this).hashCode() as JavaValue<number>;
    return proxy.toV8Value();
  }

  public equals (obj: Object): boolean {
    const proxy = getJavaObject(this).equals(getJavaObject(obj)) as JavaValue<boolean>;
    return proxy.toV8Value();
  }

  public toString (): string {
    const proxy = getJavaObject(this).toString() as JavaValue<string>;
    return proxy.toV8Value();
  }
}