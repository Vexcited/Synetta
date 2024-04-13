import JavaObject from "../../java/lang/Object.js";
import getJavaObject from "../../utils/getJavaObject.js";

export default class Scene extends JavaObject {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.Scene;

  /**
   * Creates a Scene for a specific root Node with a specific size.
   *
   * @param root The root node of the scene graph
   * @param width The width of the scene
   * @param height The height of the scene
   */
  public constructor (root: JavaObject, width: number, height: number) {
    const bridge = new Scene.#Bridge(getJavaObject(root), width, height);
    super(bridge);
  }

  set root (root: JavaObject) {
    getJavaObject(this).setRoot(getJavaObject(root));
  }
}
