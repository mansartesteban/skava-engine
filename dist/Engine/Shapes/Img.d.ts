export default Img;
declare class Img {
    constructor(path: any);
    img: HTMLImageElement;
    imgLoaded: boolean;
    draw(viewer: any, transform?: TransformComponent): void;
    #private;
}
import TransformComponent from "../Components/TransformComponent";
