export default TransformComponent;
declare class TransformComponent extends Component {
    position: Vector2;
    rotation: Rotation;
    scale: Vector2;
    size: Vector2;
    update(): void;
}
import Component from "../Component";
import Vector2 from "../Vector2";
import Rotation from "../Rotation";
