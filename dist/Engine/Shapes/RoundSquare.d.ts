export default RoundSquare;
declare class RoundSquare {
    constructor(position?: Vector2, size?: Vector2, radius?: number[], color?: RGB, rotation?: Rotation);
    set position(position: Vector2);
    get position(): Vector2;
    set size(size: Vector2);
    get size(): Vector2;
    set radius(radius: number[]);
    get radius(): number[];
    set color(color: RGB);
    get color(): RGB;
    set rotation(rotation: Rotation);
    get rotation(): Rotation;
    set shadowBlur(shadowBlur: any);
    get shadowBlur(): any;
    set shadowColor(shadowColor: any);
    get shadowColor(): any;
    set shadowSize(shadowSize: any);
    get shadowSize(): any;
    set shadowPosition(shadowPosition: any);
    get shadowPosition(): any;
    draw(viewer: any): void;
    #private;
}
import { Vector2 } from "@/Bundles/Core";
import { RGB } from "@/Bundles/Core";
import { Rotation } from "@/Bundles/Core";
