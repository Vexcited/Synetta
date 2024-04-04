import JSBridge from "../../utils/JSBridge.js";

// @ts-ignore
const BridgedLabel = Java.type('javafx.scene.control.Label');

export default class Label extends JSBridge {
  public constructor (text: string) {
    super(new BridgedLabel(text));
  }
}
