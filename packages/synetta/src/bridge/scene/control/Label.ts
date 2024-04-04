import JSBridge from "~/utils/JSBridge";

const BridgedLabel = Java.type('javafx.scene.control.Label');

export default class Label extends JSBridge {
  public constructor (text: string) {
    super(new BridgedLabel(text));
  }
}
