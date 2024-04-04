import JSBridge, { getJavaObject } from "~/utils/JSBridge";

const BridgedStackPane = Java.type('javafx.scene.layout.StackPane');

export default class StackPane extends JSBridge {
  public constructor (root: JSBridge) {
    super(new BridgedStackPane(getJavaObject(root)));
  }
}
