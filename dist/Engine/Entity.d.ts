export default Entity;
declare class Entity {
    constructor(...components: any[]);
    uuid: string;
    components: Map<any, any>;
    transform: TransformComponent;
    scene: any;
    observer: Observer;
    addComponent(component: any): void;
    removeComponent(component: any): void;
    getComponent(component: any): any;
    update(deltaTime: any, currentTime: any): void;
    loop(deltaTime: any, currentTime: any): void;
}
import TransformComponent from "./Components/TransformComponent";
import Observer from "./Observer";
