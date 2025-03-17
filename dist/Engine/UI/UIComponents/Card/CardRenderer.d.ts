export default CardRenderer;
declare class CardRenderer extends UIRenderer {
    shape: RoundSquare;
    render(viewer: any): void;
}
import UIRenderer from "../../Core/UIRenderer";
import RoundSquare from "@/Engine/Shapes/RoundSquare";
