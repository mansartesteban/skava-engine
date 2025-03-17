export default Line;
declare class Line {
    constructor(from?: Vector2, to?: Vector2, color?: RGB, thickness?: number, dashes?: any[], options?: {});
    set from(from: Vector2);
    get from(): Vector2;
    set to(to: Vector2);
    get to(): Vector2;
    set color(color: RGB);
    get color(): RGB;
    set dashes(dashes: any[]);
    get dashes(): any[];
    set thickness(thickness: number);
    get thickness(): number;
    set options(options: {});
    get options(): {};
    draw(viewer: any): void;
    #private;
}
import Vector2 from "../Vector2";
import RGB from "../RGB";
