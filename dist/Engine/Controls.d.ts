export default Controls;
declare class Controls {
    constructor(pointerLock?: boolean);
    stack: any[];
    commands: any[];
    onceCommandsExecuted: any[];
    pointerLock: any;
    mouse: Vector2;
    touchStart: Vector2;
    touch: Vector2;
    registerCommand(command: any): any;
    unregisterCommand(command: any): void;
    update(deltaTime: any): void;
    #private;
}
import Vector2 from "./Vector2";
