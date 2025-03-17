export default Text;
declare class Text {
    constructor(text?: string, position?: Vector2, color?: RGB, fontSize?: number);
    set text(text: string);
    get text(): string;
    set position(position: Vector2);
    get position(): Vector2;
    set color(color: RGB);
    get color(): RGB;
    set fontSize(fontSize: number);
    get fontSize(): number;
    draw(viewer: any): void;
    #private;
}
import Vector2 from "../Vector2";
import RGB from "../RGB";
