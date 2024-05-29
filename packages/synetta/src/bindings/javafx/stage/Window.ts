import Object from "../../java/lang/Object.js";
import Scene from "../scene/Scene.js";
import getJavaObject from "../../utils/getJavaObject.js";
import type JavaValue from "../../utils/JavaValue.js";

/**
 * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html
 */
export default class Window extends Object {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.stage.Window;

  public static __new (): Window {
    return new Window(new Window.#Bridge());
  }

  public constructor (_bridged: any) {
    super(_bridged);
  }

  /**
   * Returns a list containing a reference to the currently showing JavaFX windows.
   * The list is unmodifiable - attempting to modify this list will result in an `UnsupportedOperationException` being thrown at runtime.
   * 
   * @returns A list containing all windows that are currently showing.
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#getWindows()
   */
  public static get windows (): JavaValue<any> {
    return Window.#Bridge.getWindows();
  }

  /**
   * Set the width and height of this Window to match the size of
   * the content of this Window's Scene.
   * 
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#sizeToScene()
   */
  public sizeToScene(): void {
    getJavaObject(this).sizeToScene();
  }

  /**
   * Sets x and y properties on this Window so that it is centered on the current screen.
   * The current screen is determined from the intersection of current window bounds and visual bounds of all screens.
   * 
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#centerOnScreen()
   */
  public centerOnScreen(): void {
    getJavaObject(this).centerOnScreen();
  }

  /**
   * Value of the `outputScaleX` property.
   * 
   * The scale that the `Window` will apply to horizontal scene coordinates in all stages of rendering and compositing the output to the screen or other destination device.
   * This property is updated asynchronously by the system at various times including:
   * - Window creation
   * - At some point during moving a window to a new `Screen` which may be before or after the `Screen` property is updated.
   * - In response to a change in user preferences for output scaling.
   * 
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#getOutputScaleX()
   */
  public get outputScaleX(): number {
    const outputScaleX: JavaValue<number> = getJavaObject(this).getOutputScaleX();
    return outputScaleX.toV8Value();
  }

  /**
   * Value of the `outputScaleY` property.
   * 
   * The scale that the `Window` will apply to horizontal scene coordinates in all stages of rendering and compositing the output to the screen or other destination device.
   * This property is updated asynchronously by the system at various times including:
   * - Window creation
   * - At some point during moving a window to a new `Screen` which may be before or after the `Screen` property is updated.
   * - In response to a change in user preferences for output scaling.
   * 
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#getOutputScaleX()
   */
  public get outputScaleY(): number {
    const outputScaleY: JavaValue<number> = getJavaObject(this).getOutputScaleY();
    return outputScaleY.toV8Value();
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#isForceIntegerRenderScale()
   * @default false
   */
  public get forceIntegerRenderScale (): boolean {
    const forced: JavaValue<boolean> = getJavaObject(this).isForceIntegerRenderScale();
    return forced.toV8Value();
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#setForceIntegerRenderScale(boolean)
   */
  public set forceIntegerRenderScale (forced: boolean) {
    getJavaObject(this).setForceIntegerRenderScale(forced);
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#getRenderScaleX()
   */
  public get renderScaleX (): number {
    const renderScaleX: JavaValue<number> = getJavaObject(this).getRenderScaleX();
    return renderScaleX.toV8Value();
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#setRenderScaleX(double)
   */
  public set renderScaleX (scale: number) {
    getJavaObject(this).setRenderScaleX(scale);
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#getRenderScaleY()
   */
  public get renderScaleY (): number {
    const renderScaleY: JavaValue<number> = getJavaObject(this).getRenderScaleY();
    return renderScaleY.toV8Value();
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#setRenderScaleY(double)
   */
  public set renderScaleY (scale: number) {
    getJavaObject(this).setRenderScaleY(scale);
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#getX()
   */
  public get x (): number {
    const x: JavaValue<number> = getJavaObject(this).getX();
    return x.toV8Value();
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#setX(double)
   */
  public set x (x: number) {
    getJavaObject(this).setX(x);
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#getY()
   */
  public get y (): number {
    const y: JavaValue<number> = getJavaObject(this).getY();
    return y.toV8Value();
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#setY(double)
   */
  public set y (y: number) {
    getJavaObject(this).setY(y);
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#getWidth()
   */
  public get width (): number {
    const width: JavaValue<number> = getJavaObject(this).getWidth();
    return width.toV8Value();
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#setWidth(double)
   */
  public set width (width: number) {
    getJavaObject(this).setWidth(width);
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#getWidth()
   */
  public get height (): number {
    const height: JavaValue<number> = getJavaObject(this).getHeight();
    return height.toV8Value();
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#setHeight(double)
   */
  public set height (height: number) {
    getJavaObject(this).setHeight(height);
  }

  /**
   * Requests that this `Window` get the input focus.
   * 
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#requestFocus()
   */
  public requestFocus (): void {
    getJavaObject(this).requestFocus();
  }

  /**
   * Whether or not this `Window` has the keyboard or input focus.
   * 
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#isFocused()
   */
  public get focused (): boolean {
    const focused: JavaValue<boolean> = getJavaObject(this).isFocused();
    return focused.toV8Value();
  }

  // TODO: public final ObservableMap<Object, Object> getProperties()

  /**
   * Tests if `Window` has properties.
   * 
   * @returns `true` if node has properties.
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#hasProperties()
   */
  public get hasProperties (): boolean {
    const hasProperties: JavaValue<boolean> = getJavaObject(this).hasProperties();
    return hasProperties.toV8Value();
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#getUserData()
   */
  public get userData (): Object {
    return new Object(getJavaObject(this).getUserData());
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#setUserData(java.lang.Object)
   */
  public set userData (value: Object) {
    getJavaObject(this).setUserData(getJavaObject(value));
  }

  /**
   * Sets the value of the scene property.
   * 
   * The Scene to be rendered on this Window.
   * There can only be one Scene on the Window at a time, and a Scene can only
   * be on one Window at a time. Setting a Scene on a different Window will cause
   * the old Window to lose the reference before the new one gains it.
   * You may swap Scenes on a Window at any time, even if it is an instance of Stage
   * and with fullScreen set to true.
   * 
   * If the width or height of this Window have never been set by the application,
   * setting the scene will cause this Window to take its width or height from that scene.
   * Resizing this Window by end user does not count as setting the width or height by the
   * application.
   * 
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#setScene(javafx.scene.Scene)
   */
  public set scene (value: Scene) {
    getJavaObject(this).setScene(getJavaObject(value));
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#getScene()
   */
  public get scene (): Scene {
    return new Scene(getJavaObject(this).getScene());
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#getOpacity()
   * @default 1.0
   */
  public get opacity (): number {
    const opacity: JavaValue<number> = getJavaObject(this).getOpacity();
    return opacity.toV8Value();
  }

  /**
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#setOpacity(double)
   */
  public set opacity (opacity: number) {
    getJavaObject(this).setOpacity(opacity);
  }

  // TODO: public final void setOnCloseRequest(EventHandler<WindowEvent> value)
  // TODO: public final EventHandler<WindowEvent> getOnCloseRequest()

  // TODO: public final void setOnShowing(EventHandler<WindowEvent> value)
  // TODO: public final EventHandler<WindowEvent> getOnShowing()

  // TODO: public final void setOnShown(EventHandler<WindowEvent> value)
  // TODO: public final EventHandler<WindowEvent> getOnShown()

  // TODO: public final void setOnHiding(EventHandler<WindowEvent> value)
  // TODO: public final EventHandler<WindowEvent> getOnHiding()

  // TODO: public final void setOnHidden(EventHandler<WindowEvent> value)
  // TODO: public final EventHandler<WindowEvent> getOnHidden()

  /**
   * Whether or not this Window is showing (that is, open on the user's system).
   * The `Window` might be "showing", yet the user might not be able to see it due to the Window being rendered behind another Window or due to the Window being positioned off the monitor.
   * 
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#isShowing()
   */
  public get showing (): boolean {
    const showing: JavaValue<boolean> = getJavaObject(this).isShowing();
    return showing.toV8Value();
  }

  /**
   * Attempts to show this Window by setting visibility to true.
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#show()
   */
  public show (): void {
    return getJavaObject(this).show();
  }

  /**
   * Attempts to hide this Window by setting the visibility to false.
   * @see https://openjfx.io/javadoc/21/javafx.graphics/javafx/stage/Window.html#hide()
   */
  public hide (): void {
    return getJavaObject(this).hide();
  }
}
