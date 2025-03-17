"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const ImplementError = require("../ImplementError-1IS0II9w.js");
const Vector2 = require("../Vector2-CYfU2A-a.js");
require("../Time-BnYKtbMg.js");
const TransformComponent = require("../TransformComponent-BRl5nHr1.js");
class Render2DComponent extends Vector2.Component {
  constructor(options) {
    super();
    this.options = {
      updateFrequency: 16
    };
    if (options) {
      this.options = { ...this.options, ...options };
    }
  }
  updateComponent(deltaTime, currentTime) {
    this.render(this.entity.scene.viewer, deltaTime, currentTime);
  }
  render(_, deltaTime, currentTime) {
    throw new ImplementError.ImplementError("render", "RenderComponent");
  }
}
exports.TransformComponent = TransformComponent.TransformComponent;
exports.Render2DComponent = Render2DComponent;
//# sourceMappingURL=Components.cjs.js.map
