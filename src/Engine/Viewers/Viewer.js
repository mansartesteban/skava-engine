import { ImplementError } from "@/Bundles/Errors";

class Viewer {
  options;

  refresh() {}
  render() {
    throw new ImplementError("render", "Viewer");
  }
}

export default Viewer;
