export default UIManager;
declare class UIManager {
    constructor(scene: any);
    controls: Controls;
    scene: any;
    mainLayout: MainLayout;
    get uiComponents(): any[];
    clean(): void;
    add(uiComponent: any): void;
    #private;
}
import { Controls } from "@/Bundles/Core";
import { MainLayout } from "@/Bundles/UI/Components";
