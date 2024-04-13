import getJavaObject from "../../../utils/getJavaObject.js";
import Labeled from "./Labeled.js";

/**
 * @see https://openjfx.io/javadoc/21/javafx.controls/javafx/scene/control/Button.html
 */
export default class Button extends Labeled {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.control.Button;

  public constructor (text = "") {
    const button = new Button.#Bridge(text);
    super(button);
  }

  public set onMouseClicked (callback: (event: any) => void) {
    getJavaObject(this).setOnMouseClicked(callback);
  }
}
