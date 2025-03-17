export default CardRenderer;
declare class CardRenderer extends UIRenderer {
    shape: RoundSquare;
    render(viewer: any): void;
}
import { UIRenderer } from "@/Bundles/UI";
import { RoundSquare } from "@/Bundles/Core/Shapes";
