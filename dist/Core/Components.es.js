import { I as ImplementError } from "../ImplementError-BSFja-GU.mjs";
import { C as Component } from "../Vector2-BXEmxqj7.mjs";
import "../Time-D6jb6SoV.mjs";
import { T } from "../TransformComponent-Wh2kRWxM.mjs";
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
