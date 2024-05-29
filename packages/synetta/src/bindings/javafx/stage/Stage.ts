import type Scene from "../scene/Scene.js";
import getJavaObject from "../../utils/getJavaObject.js";
import Window from "./Window.js";

/**
 * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Stage.html
 */
export default class Stage extends Window {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.stage.Stage;

  public static __new (): Stage {
    return new Stage(new Stage.#Bridge());
  }

  public constructor (_bridged: any) {
    super(_bridged);
  }

  public set title (title: string) {
    getJavaObject(this).setTitle(title);
  }

  public get title (): string {
    return getJavaObject(this).getTitle();
  }
}
