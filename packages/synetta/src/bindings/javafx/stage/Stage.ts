import JavaObject from "../../java/lang/Object.js";
import type Scene from "../scene/Scene.js";
import getJavaObject from "../../utils/getJavaObject.js";

export default class Stage extends JavaObject {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.stage.Stage;

  /**
   * Used to create a new instance of `Stage` from JavaFX.
   * The current constructor takes an instance anc will not create one.
   * 
   * This behavior is because the primary stage is given as an instance
   * already created and cannot be created manually.
   * 
   * That's why the instantiation is moved from the constructor to this function.
   */
  public static createBridgeInstance (): Stage {
    const stage = new Stage.#Bridge();
    return new Stage(stage);
  }

  /**
   * @param bridgeInstance Allows to make an instance of this class from the bridged object.
   */
  public constructor (bridgeInstance: any) {
    super(bridgeInstance);
  }

  public set title (title: string) {
    getJavaObject(this).setTitle(title);
  }

  public get title (): string {
    return getJavaObject(this).getTitle();
  }

  public set scene (scene: Scene) {
    getJavaObject(this).setScene(getJavaObject(scene));
  }

  public show (): void {
    return getJavaObject(this).show();
  }

  public hide (): void {
    return getJavaObject(this).hide();
  }
}
