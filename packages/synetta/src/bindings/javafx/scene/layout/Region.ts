import Parent from "../Parent.js";

/**
 * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/scene/layout/Region.html
 */
export default class Region extends Parent {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.layout.Region;

  public static __new(): Region {
    return new Region(new Region.#Bridge());
  }

  public constructor (_bridged: any) {
    super(_bridged);
  }
}