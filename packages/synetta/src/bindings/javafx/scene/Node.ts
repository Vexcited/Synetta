import Object from "../../java/lang/Object.js";

/**
 * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/scene/Node.html
 */
export default abstract class Node extends Object {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.Node;

  public static __new(): Node {
    throw new Error("You can't create instances of abstract classes.");
  } 

  protected constructor (_bridged: any) {
    super(_bridged);
  }
}