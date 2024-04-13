import Labeled from "./Labeled.js";

export default class Label extends Labeled {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.control.Label;

  public constructor (text = "") {
    const label = new Label.#Bridge(text);
    super(label);
  }
}
