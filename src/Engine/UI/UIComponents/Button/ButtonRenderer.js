import { RoundSquare, Img } from "@/Bundles/Core/Shapes";
import { UIRenderer, UIStyle } from "@/Bundles/UI";

class ButtonRenderer extends UIRenderer {
  shape;
  style;

  setup() {
    super.setup();
    this.style = this.uiComponent.getComponent(UIStyle);
    // this.shape = new RoundSquare(
    //   this.uiComponent.transform.position,
    //   this.uiComponent.transform.size,
    //   this.style.borderRadius,
    //   this.style.color
    // );

    this.shape = new Img("/button.png");
  }

  render(viewer) {
    this.shape.position = this.uiComponent.transform.position;
    this.shape.size = this.uiComponent.transform.size;

    this.shape.color = this.style.color;

    this.shape.draw(viewer, this.uiComponent.transform);
  }
}

export default ButtonRenderer;
