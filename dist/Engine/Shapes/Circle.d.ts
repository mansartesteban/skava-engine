export default Circle;
declare class Circle {
    constructor(position?: Vector2, radius?: number, color?: RGB, angle?: any, direction?: any, options?: {});
    set angle(angle: any);
    get angle(): any;
    set direction(direction: any);
    get direction(): any;
    set position(position: Vector2);
    get position(): Vector2;
    set radius(radius: number);
    get radius(): number;
    set color(color: RGB);
    get color(): RGB;
    set options(options: {});
    get options(): {};
    draw(viewer: any): void;
    #private;
}
import { Vector2 } from "@/Bundles/Core";
import { RGB } from "@/Bundles/Core";
