import { RoundSquare } from "@/Bundles/Core/Shapes";
import { UIRenderer } from "@/Bundles/UI";

class CardRenderer extends UIRenderer {
  shape = new RoundSquare();

  render(viewer) {
    this.shape.position.sub(viewer.origin);
    this.shape.draw(viewer);
  }
}

export default CardRenderer;
