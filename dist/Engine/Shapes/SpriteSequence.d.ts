export default SpriteSequence;
declare class SpriteSequence {
    constructor(sprite: any, positions: any);
    sprite: any;
    positions: any;
    set current(current: number);
    get current(): number;
    next(): void;
    prev(): void;
    draw(viewer: any, transform: any): void;
    #private;
}
