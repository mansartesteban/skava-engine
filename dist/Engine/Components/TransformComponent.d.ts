export default TransformComponent;
declare class TransformComponent extends Component {
    position: Vector2;
    rotation: Rotation;
    scale: Vector2;
    size: Vector2;
    update(): void;
}
import { Component } from "@/Bundles/Core";
import { Vector2 } from "@/Bundles/Core";
import { Rotation } from "@/Bundles/Core";
