import Region from "../layout/Region.js";

/**
 * Base class for all user interface controls.
 * A "Control" is a node in the scene graph which can be manipulated by the user.
 * Controls provide additional variables and behaviors beyond those of Node to support
 * common user interactions in a manner which is consistent and predictable for the user.
 * 
 * Additionally, controls support explicit skinning to make it easy to leverage
 * the functionality of a control while customizing its appearance.
 * 
 * See specific Control subclasses for information on how to use individual types of controls.
 */
export default abstract class Control extends Region {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.control.Control;

  public static __new(): Control {
    throw new Error("You can't create instances of abstract classes.");
  } 

  protected constructor (_bridged: any) {
    super(_bridged);
  }
}