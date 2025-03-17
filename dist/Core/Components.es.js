import { I as ImplementError } from "../ImplementError-BSFja-GU.mjs";
import { C as Component } from "../Vector2-Dy-12kp6.mjs";
import "../Time-D6jb6SoV.mjs";
import "uuid";
import { T } from "../TransformComponent-bBQZJGxr.mjs";
class Render2DComponent extends Component {
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
    throw new ImplementError("render", "RenderComponent");
  }
}
export {
  Render2DComponent,
  T as TransformComponent
};
//# sourceMappingURL=Components.es.js.map
