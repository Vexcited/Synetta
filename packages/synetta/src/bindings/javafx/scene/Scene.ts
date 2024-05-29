import Object from "../../java/lang/Object.js";
import type JavaValue from "../../utils/JavaValue.js";
import getJavaObject from "../../utils/getJavaObject.js";
import Parent from "./Parent.js";

export default class Scene extends Object {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.Scene;

  public static __new(root?: Parent, width?: number, height?: number): Scene {
    const scene = new Scene.#Bridge(getJavaObject(root!), width, height);
    return new Scene(scene);
  }

  public constructor (_bridged: any) {
    super(_bridged);
  }

  /**
   * NOTE: This gives you directly the bridged instance.
   * It's not wrapped in a helper class, that's why **it's not recommended to use it directly**.
   * 
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/scene/Scene.html#getRoot()
   */
  public get root (): any {
    return getJavaObject(this).getRoot();
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/scene/Scene.html#setRoot(javafx.scene.Parent)
   */
  public set root (root: Parent) {
    getJavaObject(this).setRoot(getJavaObject(root));
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/scene/Scene.html#getWidth()
   */
  public get width (): number {
    const width: JavaValue<number> = getJavaObject(this).getWidth();
    return width.toV8Value();
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/scene/Scene.html#getHeight()
   */
  public get height (): number {
    const height: JavaValue<number> = getJavaObject(this).getHeight();
    return height.toV8Value();
  }
}
