import { ButtonRenderer } from "@/Bundles/UI/Components";
import { UIComponent } from "@/Bundles/UI";

class Button extends UIComponent {
  setup() {
    super.setup();
    this.addRenderer(new ButtonRenderer());
  }
}

export default Button;
