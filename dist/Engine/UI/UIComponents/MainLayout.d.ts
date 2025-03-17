export default MainLayout;
declare class MainLayout extends UIComponent {
    toProcess: any[];
    addChild(component: any): this;
    copyViewerTransform(): void;
    loop(): void;
}
import { UIComponent } from "@/Bundles/UI";
