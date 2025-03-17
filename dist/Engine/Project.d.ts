export default Project;
declare class Project {
    constructor(options: any);
    scenes: any[];
    options: {
        name: string;
        mountOn: string;
        isDev: boolean;
    };
    loopCallback: any;
    observer: Observer;
    addScene(scene: any, options: any): void;
    getScene(sceneName: any): any;
    setup(): void;
    update(deltaTime: any, currentTime: any): void;
    loop(deltaTime: any, currentTime: any): void;
}
import Observer from "@/Engine/Observer";
