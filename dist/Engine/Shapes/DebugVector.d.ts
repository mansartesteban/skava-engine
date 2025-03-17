export default DebugVector;
declare class DebugVector {
    constructor(from?: Vector2, to?: Vector2, color?: RGB, thickness?: number);
    set from(from: Vector2);
    get from(): Vector2;
    set to(to: Vector2);
    get to(): Vector2;
    draw(viewer: any): void;
    #private;
}
import Vector2 from "../Vector2";
import RGB from "../RGB";
