import type Scene from "../scene/Scene.js";
import JSBridge, { getJavaObject } from "../utils/JSBridge.js";
// @ts-ignore
const BridgedStage = javafx.stage.Stage;

export default class Stage extends JSBridge {
  /**
   * Allows to retrieve the JS instance
   * from the Java object/instance.
   * 
   * Only class that the value can be from Java,
   * every others have to be initialized from JavaScript.
   */
  public static _fromBridged (_bridged: any) {
    return new Stage(null, _bridged)
  }
  
  /**
   * @param _unused TODO: Add parameter from the Java `Stage` class here.
   * @param existentStageInstance Allows to make an instance of this class from the bridged object.
   */
  public constructor (_unused = null, existentStageInstance?: any) {
    if (existentStageInstance) super(existentStageInstance);
    else super(new BridgedStage());
  }

  public setTitle (title: string): void {
    return getJavaObject(this).setTitle(title);
  }

  public setScene (scene: Scene): void {
    return getJavaObject(this).setScene(getJavaObject(scene));
  }

  public show (): void {
    return getJavaObject(this).show();
  }
}
