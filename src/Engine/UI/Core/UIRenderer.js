import { ImplementError } from "@/Bundles/Errors";

class UIRenderer {
  uiComponent;
  datas;

  setup() {}
  loop() {}

  render() {
    throw new ImplementError("render", "UIRenderer");
  }
}

export default UIRenderer;
