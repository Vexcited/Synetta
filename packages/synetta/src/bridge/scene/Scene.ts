import JSBridge, { getJavaObject } from "~/utils/JSBridge";

const BridgedScene = Java.type('javafx.scene.Scene');

export default class Scene extends JSBridge {
  /**
   * Creates a Scene for a specific root Node with a specific size.
   *
   * @param root The root node of the scene graph
   * @param width The width of the scene
   * @param height The height of the scene
   */
  public constructor (root: JSBridge, width: number, height: number) {
    super(new BridgedScene(getJavaObject(root), width, height));
  }
}
