export default class JSBridge {
  public _bridged: any
  public constructor (_bridged: any) {
    this._bridged = _bridged;
  }
}

export const getJavaObject = (element: JSBridge) => element._bridged;
