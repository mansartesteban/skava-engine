import { UIComponent } from "@/Bundles/UI";
import { DivRenderer } from "@/Bundles/UI/Components";

class Div extends UIComponent {
  setup() {
    super.setup();
    this.addRenderer(new DivRenderer());
  }
}

export default Div;
