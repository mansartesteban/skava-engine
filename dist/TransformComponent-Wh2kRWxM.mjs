var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { C as Component, V as Vector2, a as Rotation } from "./Vector2-BXEmxqj7.mjs";
import "./Time-D6jb6SoV.mjs";
class TransformComponent extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "position", new Vector2(0, 0));
    __publicField(this, "rotation", new Rotation());
    __publicField(this, "scale", new Vector2(1, 1));
    __publicField(this, "size", new Vector2(0, 0));
  }
  update() {
  }
}
export {
  TransformComponent as T
};
//# sourceMappingURL=TransformComponent-Wh2kRWxM.mjs.map
