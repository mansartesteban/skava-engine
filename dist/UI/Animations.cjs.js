"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const UIAnimation = require("../UIAnimation-B8xma3ES.js");
require("../Time-BnYKtbMg.js");
require("uuid");
require("../Vector2-BBtao3PE.js");
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
