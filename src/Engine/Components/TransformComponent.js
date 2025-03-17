import { Component, Rotation, Vector2 } from "@/Bundles/Core";

class TransformComponent extends Component {
  position = new Vector2(0, 0);
  rotation = new Rotation();
  scale = new Vector2(1, 1);
  size = new Vector2(0, 0);

  update() {}
}

export default TransformComponent;
