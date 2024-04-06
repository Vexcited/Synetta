import JSBridge from "../../utils/JSBridge.js";

// @ts-ignore
const BridgedLabel = javafx.scene.control.Label;

export default class Label extends JSBridge {
  public constructor (text?: string) {
    super(new BridgedLabel(text ?? ""));
  }

  public setText (text: string): void {
    return this._bridged.setText(text);
  }
}
