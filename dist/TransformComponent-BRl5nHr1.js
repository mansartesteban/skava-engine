"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const Vector2 = require("./Vector2-CYfU2A-a.js");
require("./Time-BnYKtbMg.js");
class TransformComponent extends Vector2.Component {
  constructor() {
    super(...arguments);
    __publicField(this, "position", new Vector2.Vector2(0, 0));
    __publicField(this, "rotation", new Vector2.Rotation());
    __publicField(this, "scale", new Vector2.Vector2(1, 1));
    __publicField(this, "size", new Vector2.Vector2(0, 0));
  }
  update() {
  }
}
exports.TransformComponent = TransformComponent;
//# sourceMappingURL=TransformComponent-BRl5nHr1.js.map
