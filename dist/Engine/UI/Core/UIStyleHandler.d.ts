export default UIStyleHandler;
declare class UIStyleHandler {
    constructor(uiStyle: any);
    indexInParent: number;
    datas: {
        size: Vector2;
        margin: number[];
    };
    set style(style: any);
    get style(): any;
    set component(component: any);
    get component(): any;
    get parent(): any;
    get lastSibling(): any;
    get lastSiblingStyleHandler(): any;
    autoHeightParent(parent: any, current: any): void;
    calculateSize(parentTransform: any): Vector2;
    getNextFreePosition(component: any, index: any): Vector2;
    calculatePosition(parentTransform: any): Vector2;
    handleStyle(): void;
    #private;
}
import { Vector2 } from "@/Bundles/Core";
