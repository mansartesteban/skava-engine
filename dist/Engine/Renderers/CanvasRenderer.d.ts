export default CanvasRenderer;
declare class CanvasRenderer extends Renderer {
    constructor(options: any);
    options: any;
    domElement: any;
    get ctx(): any;
    createDomElement(): void;
}
import { Renderer } from "@/Bundles/Core";
