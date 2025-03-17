import { ImplementError } from "@/Bundles/Errors";
import { Component } from "@/Bundles/Core";

class Render2DComponent extends Component {
  constructor(options) {
    super();
    this.options = {
      updateFrequency: 16,
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

export default Render2DComponent;
