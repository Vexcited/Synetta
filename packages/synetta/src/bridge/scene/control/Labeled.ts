import JSBridge from "../../utils/JSBridge.js";
import { getJavaObject } from "../../utils/JSBridge.js";

/**
 * A bridge over the `Labeled` class to prevent redefining the same methods in each class.
 * Instead of taking a `text` parameter, it takes the bridged object as a parameter.
 * 
 * @see https://openjfx.io/javadoc/21/javafx.controls/javafx/scene/control/Labeled.html
 */
export default abstract class Labeled extends JSBridge {
  protected constructor (elementBridged: any) {
    super(elementBridged);
  }

  public getText (): string {
    return getJavaObject(this).getText();
  }
  
  public setText (text: string): void {
    getJavaObject(this).setText(text);
  }

  public isUnderline (): boolean {
    return getJavaObject(this).isUnderline();
  }

  public setUnderline (value: boolean): void {
    getJavaObject(this).setUnderline(value);
  }

  public isWrapText (): boolean {
    return getJavaObject(this).isWrapText();
  }

  public setWrapText (value: boolean): void {
    getJavaObject(this).setWrapText(value);
  }
}
