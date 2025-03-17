export default Component;
declare class Component {
    constructor(options: any);
    options: {};
    active: boolean;
    entity: any;
    updateComponent(deltaTime: any, currentTime: any): void;
    loop(deltaTime: any, currentTime: any): void;
    refresh(): void;
    setup(): void;
}
