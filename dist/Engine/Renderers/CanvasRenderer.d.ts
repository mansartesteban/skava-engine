export default CanvasRenderer;
declare class CanvasRenderer {
    constructor(options: any);
    options: any;
    domElement: any;
    get ctx(): any;
    createDomElement(): void;
}
