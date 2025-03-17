import { RoundSquare } from "@/Bundles/Core/Shapes";
import { UIRenderer, UIStyle } from "@/Bundles/UI";

class DebugDivRenderer extends UIRenderer {
  shape;
  style;

  setup() {
    super.setup();
    this.style = this.uiComponent.getComponent(UIStyle);
    this.shape = new RoundSquare(
      this.uiComponent.transform.position,
      this.uiComponent.transform.size,
      this.style.borderRadius,
      this.style.color
    );
  }

  render(viewer) {
    this.shape.position = this.uiComponent.transform.position;
    this.shape.size = this.uiComponent.transform.size;
    this.shape.rotation = this.uiComponent.transform.rotation;
    this.shape.shadowBlur = this.style.shadowBlur;
    this.shape.shadowColor = this.style.shadowColor;

    this.shape.draw(viewer);
  }
}

export default DebugDivRenderer;
