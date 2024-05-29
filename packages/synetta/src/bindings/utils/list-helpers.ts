import Object from "../java/lang/Object.js";
import type ObservableList from "../javafx/collections/ObservableList.js";

export function listTryGetChildren (list: ObservableList<any>, index: number, Factory = Object) {
  try {
    const item = list.get(index);
    return new Factory(item);
  }
  catch {
    return null;
  }
}