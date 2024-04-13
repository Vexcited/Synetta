import Object from "../../../java/lang/Object.js";
import getJavaObject from "../../../utils/getJavaObject.js";
import type ObservableList from "../../collections/ObservableList.js";

/**
 * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/scene/layout/Pane.html
 */
export default class Pane extends Object {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.layout.Pane;

  public static create (...elements: Object[]): Pane {
    return new Pane(new Pane.#Bridge(...elements.map(getJavaObject)));
  }

  /**
   * If you want to manually create an instance of this class,
   * you should use `Pane.create` instead, to avoid the risk of missing bridge.
   */
  protected constructor (_bridged: any) {
    super(_bridged);
  }

  public getChildren (): ObservableList<any> {
    return getJavaObject(this).getChildren();
  }
}
