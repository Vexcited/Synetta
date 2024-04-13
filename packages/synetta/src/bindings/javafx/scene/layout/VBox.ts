import type Object from "../../../java/lang/Object.js";
import getJavaObject from "../../../utils/getJavaObject.js";
import Pane from "./Pane.js";

export default class VBox extends Pane {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.layout.VBox;

  public constructor (spacing = 0, ...elements: Object[]) {
    const vBox = new VBox.#Bridge(spacing, ...elements.map(getJavaObject));
    super(vBox);
  }
}
