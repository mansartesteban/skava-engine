export default Square;
declare class Square {
    constructor(position?: Vector2, size?: Vector2, color?: RGB);
    set position(position: Vector2);
    get position(): Vector2;
    set size(size: Vector2);
    get size(): Vector2;
    set color(color: RGB);
    get color(): RGB;
    draw(viewer: any): void;
    #private;
}
import Vector2 from "../Vector2";
import RGB from "../RGB";
