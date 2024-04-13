import type Object from "../java/lang/Object.js";

export default function getJavaObject (object: Object) {
  return object._bridged;
}
