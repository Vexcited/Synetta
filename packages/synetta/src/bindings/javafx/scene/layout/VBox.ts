import type JavaValue from "../../../utils/JavaValue.js";
import getJavaObject from "../../../utils/getJavaObject.js";
import type Node from "../Node.js";
import Pane from "./Pane.js";

export default class VBox extends Pane {
  // @ts-expect-error : not typed.
  static readonly #Bridge = javafx.scene.layout.VBox;

  /** Creates a VBox layout with the specified spacing between children. */
  public static __new (spacing: number, ...elements: Node[]): VBox;
  /** Creates a VBox layout with spacing = 0. */
  public static __new (...elements: Node[]): VBox;
  /** Creates a VBox layout with the specified spacing between children. */
  public static __new (spacing: number): VBox;
  /** Creates a VBox layout with spacing = 0 and alignment at TOP_LEFT. */
  public static __new (): VBox;

  public static __new (...args: any): VBox {
    let bridge;
    
    // VBox()
    if (args.length === 0) {
      bridge = new VBox.#Bridge();
    }
    // VBox(double spacing)
    else if (typeof args[0] === "number" && args.length === 1) {
      const [spacing] = args as [spacing: number];
      bridge = new VBox.#Bridge(spacing);
    }
    // VBox(double spacing, Node... children)
    else if (typeof args[0] === "number" && args.length > 1) {
      const [spacing, ...elements] = args as [spacing: number, ...elements: Node[]];
      bridge = new VBox.#Bridge(spacing, ...elements.map(getJavaObject));
    }
    // VBox(Node... children)
    else if (typeof args[0] !== "number" && args.length > 0) {
      const elements = args as Node[];
      bridge = new VBox.#Bridge(...elements.map(getJavaObject));
    }
    else throw new Error("Invalid arguments");

    return new VBox(bridge);
  }

  public constructor (_bridged: any) {
    super(_bridged);
  }

  public get spacing (): number {
    const space: JavaValue<number> = getJavaObject(this).getSpacing();
    return space.toV8Value();
  }

  public set spacing (value: number) {
    getJavaObject(this).setSpacing(value);
  }
}
