import Object from "../../../java/lang/Object.js";
import getJavaObject from "../../../utils/getJavaObject.js";
import type ObservableList from "../../collections/ObservableList.js";
import Region from "./Region.js";

/**
 * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/scene/layout/Pane.html
 */
export default class Pane extends Region {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.layout.Pane;

  public static __new (...elements: Object[]): Pane {
    return new Pane(new Pane.#Bridge(...elements.map(getJavaObject)));
  }

  public constructor (_bridged: any) {
    super(_bridged);
  }

  public getChildren (): ObservableList<any> {
    return getJavaObject(this).getChildren();
  }
}
