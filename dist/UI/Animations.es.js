import { U as i } from "../UIAnimation-B_15Hu3W.mjs";
import "../Time-DerQyAzN.mjs";
import "uuid";
import "../Vector2-DsmbReYL.mjs";
class s extends i {
  loop(e, t) {
    this.entity.transform.rotation.setAngle(
      Math.sin(t / 50) / 10,
      !0
    );
  }
}
export {
  s as ShakeAnimation
};
