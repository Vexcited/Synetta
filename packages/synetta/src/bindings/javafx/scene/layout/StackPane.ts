import type Object from "../../../java/lang/Object.js";
import getJavaObject from "../../../utils/getJavaObject.js";
import Pane from "./Pane.js";

export default class StackPane extends Pane {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.layout.StackPane;

  public constructor (...elements: Object[]) {
    const stackPane = new StackPane.#Bridge(...elements.map(getJavaObject));
    super(stackPane);
  }
}
