export default MultiLine;
declare class MultiLine {
    constructor(points?: any[], color?: RGB, thickness?: number, dashes?: any[]);
    set points(points: any[]);
    get points(): any[];
    set color(color: RGB);
    get color(): RGB;
    set dashes(dashes: any[]);
    get dashes(): any[];
    set thickness(thickness: number);
    get thickness(): number;
    draw(viewer: any): void;
    #private;
}
import RGB from "../RGB";
