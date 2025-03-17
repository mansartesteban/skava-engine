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
import Controls from "@/Engine/Controls";
import MainLayout from "../UIComponents/MainLayout";
