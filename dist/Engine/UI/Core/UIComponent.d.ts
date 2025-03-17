export default UIComponent;
declare class UIComponent extends Entity {
    setupDone: boolean;
    reactToEvents: boolean;
    uiManager: any;
    datas: {
        origin: Vector2;
        defaultSlot: any;
    };
    slots: Map<any, any>;
    eventObserver: Observer;
    set parent(parent: any);
    get parent(): any;
    get children(): any[];
    set root(root: any);
    get root(): any;
    get isRoot(): boolean;
    set tree(tree: any[]);
    get tree(): any[];
    get pendingTree(): any[];
    setup(): void;
    addRenderer(renderer: any): this;
    setStyle(style: any): void;
    setSlot(name: any, component: any): void;
    setDefaultSlot(child: any): void;
    addChild(component: any, slotName?: string): this;
    addEventListener(type: any, callback: any): void;
    trigger(type: any, ...parameters: any[]): void;
    #private;
}
import { Entity } from "@/Bundles/Core";
import { Vector2 } from "@/Bundles/Core";
import { Observer } from "@/Bundles/Core";
