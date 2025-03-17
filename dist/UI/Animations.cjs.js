"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const UIAnimation = require("../UIAnimation-yVq7yAVy.js");
require("../Time-BnYKtbMg.js");
require("../Vector2-CYfU2A-a.js");
class ShakeAnimation extends UIAnimation.UIAnimation {
  loop(deltaTime, currentTime) {
    this.entity.transform.rotation.setAngle(
      Math.sin(currentTime / 50) / 10,
      true
    );
  }
}
exports.ShakeAnimation = ShakeAnimation;
//# sourceMappingURL=Animations.cjs.js.map
