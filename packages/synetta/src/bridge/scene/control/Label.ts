import Labeled from "./Labeled.js";

export default class Label extends Labeled {
  public constructor (text = "") {
    // @ts-expect-error : bridge is not typed.
    const label = new javafx.scene.control.Label(text);
    super(label);
  }
}
