import Node from "./Node.js";

/**
 * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/scene/Parent.html
 */
export default abstract class Parent extends Node {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.Parent;

  public static __new(): Parent {
    throw new Error("You can't create instances of abstract classes.");
  }

  protected constructor (_bridged: any) {
    super(_bridged);
  }
}