import { UIComponent } from "@/Bundles/UI";
import { DebugDivRenderer } from "@/Bundles/UI/Components";

class DebugDiv extends UIComponent {
  setup() {
    super.setup();
    this.addRenderer(new DebugDivRenderer());
  }
}

export default DebugDiv;
