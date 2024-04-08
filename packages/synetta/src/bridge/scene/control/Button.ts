import { getJavaObject } from "../../utils/JSBridge.js";
import Labeled from "./Labeled.js";

/**
 * @see https://openjfx.io/javadoc/21/javafx.controls/javafx/scene/control/Button.html
 */
export default class Button extends Labeled {
  public constructor (text = "") {
    // @ts-expect-error : bridge is not typed.
    const button = new javafx.scene.control.Button(text);
    super(button);
  }

  public setOnMouseClicked (callback: (event: any) => void) {
    getJavaObject(this).setOnMouseClicked(callback);
  }
}
