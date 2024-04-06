import JSBridge, { getJavaObject } from "../../utils/JSBridge.js";
// @ts-ignore
const BridgedStackPane = javafx.scene.layout.StackPane;

export default class StackPane extends JSBridge {
  public constructor (root: JSBridge) {
    super(new BridgedStackPane(getJavaObject(root)));
  }
}
