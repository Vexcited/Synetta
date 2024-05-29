import getJavaObject from "../../../utils/getJavaObject.js";
import Labeled from "./Labeled.js";

/**
 * @see https://openjfx.io/javadoc/21/javafx.controls/javafx/scene/control/Button.html
 */
export default class Button extends Labeled {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.control.Button;

  public static __new(): Button {
    return new Button(new Button.#Bridge());
  }

  public constructor (_bridged: any) {
    super(_bridged);
  }

  public set onMouseClicked (callback: (event: any) => void) {
    getJavaObject(this).setOnMouseClicked(callback);
  }
}
