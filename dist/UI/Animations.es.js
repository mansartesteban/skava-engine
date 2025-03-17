import { U as UIAnimation } from "../UIAnimation-CD5YFu-5.mjs";
import "../Time-D6jb6SoV.mjs";
import "uuid";
import "../Vector2-Dy-12kp6.mjs";
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
