import Labeled from "./Labeled.js";

export default class Label extends Labeled {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.control.Label;

  public static __new(): Label {
    return new Label(new Label.#Bridge());
  }

  public constructor (_bridged: any) {
    super(_bridged);
  }
}
