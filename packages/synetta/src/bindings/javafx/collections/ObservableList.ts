// @ts-expect-error
export default interface ObservableList<E> extends List<E> {
  /**
   * A convenience method for var-arg addition of elements.
   */
  addAll(...elements: E[]): boolean;

  remove(from: number, to: number): void;
  removeAll(...elements: E[]): boolean;

  clear(): void;

  get (index: number): E;
  add (index: number, element: E): boolean;

  size(): number;
}

interface List<E> {
  remove(element: E): boolean;
  remove(index: number): E
}