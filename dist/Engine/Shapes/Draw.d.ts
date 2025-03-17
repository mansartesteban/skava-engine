export default Draw;
declare class Draw {
    static draw(viewer: any, callback: any): void;
    static strokeRect(ctx: any, x: any, y: any, w: any, h: any, c?: RGB): void;
    static reset(ctx: any, properties?: any[]): void;
}
import RGB from "../RGB";
