import { U as UIAnimation } from "../UIAnimation-BRhJ4eRf.mjs";
import "../Time-D6jb6SoV.mjs";
import "../Vector2-BXEmxqj7.mjs";
class ShakeAnimation extends UIAnimation {
  loop(deltaTime, currentTime) {
    this.entity.transform.rotation.setAngle(
      Math.sin(currentTime / 50) / 10,
      true
    );
  }
}
export {
  ShakeAnimation
};
//# sourceMappingURL=Animations.es.js.map
