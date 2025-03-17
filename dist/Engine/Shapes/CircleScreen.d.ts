export default CircleScreen;
declare class CircleScreen {
    constructor(position?: Vector2, radius?: number, color?: any, angle?: Rotation, direction?: Vector2);
    set position(position: Vector2);
    get position(): Vector2;
    set radius(radius: number);
    get radius(): number;
    set color(color: any);
    get color(): any;
    set angle(angle: Rotation);
    get angle(): Rotation;
    set direction(direction: Vector2);
    get direction(): Vector2;
    draw(viewer: any): void;
    #private;
}
import { Vector2 } from "@/Bundles/Core";
import { Rotation } from "@/Bundles/Core";
