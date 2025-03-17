export default Sprite;
declare class Sprite extends Img {
    constructor(path: any, options?: {});
    offsetRotation: any;
    set current(position: number);
    get current(): number;
    next(steps?: number): void;
    prev(steps?: number): void;
    #private;
}
import Img from "./Img";
