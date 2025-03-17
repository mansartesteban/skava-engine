export default Viewer2d;
declare class Viewer2d {
    constructor(node: any, options: any);
    options: any;
    node: any;
    renderer: CanvasRenderer;
    size: Vector2;
    origin: Vector2;
    get ctx(): any;
    center(): void;
    render(): void;
    refresh(): void;
}
import CanvasRenderer from "../Renderers/CanvasRenderer";
import Vector2 from "../Vector2";
