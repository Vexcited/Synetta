import Object from "../../../java/lang/Object.js";
import getJavaObject from "../../../utils/getJavaObject.js";

/**
 * A bridge over the `Labeled` class to prevent redefining the same methods in each class.
 * Instead of taking a `text` parameter, it takes the bridged object as a parameter.
 * 
 * @see https://openjfx.io/javadoc/21/javafx.controls/javafx/scene/control/Labeled.html
 */
export default abstract class Labeled extends Object {
  protected constructor (elementBridged: any) {
    super(elementBridged);
  }

  public get text (): string {
    return getJavaObject(this).getText();
  }
  
  public set text (text: string) {
    getJavaObject(this).setText(text);
  }

  public get isUnderline (): boolean {
    return getJavaObject(this).isUnderline();
  }

  public set isUnderline (value: boolean) {
    getJavaObject(this).setUnderline(value);
  }

  public get isWrapText (): boolean {
    return getJavaObject(this).isWrapText();
  }

  public set isWrapText (value: boolean) {
    getJavaObject(this).setWrapText(value);
  }
}
