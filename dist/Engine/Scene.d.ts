export default Scene;
declare class Scene {
    constructor(name: any);
    setupFinished: boolean;
    name: string;
    entityManager: any;
    viewer: any;
    createViewer(mountOn: any, options: any): void;
    add(entity: any, executeSetup: any): void;
    remove(entityToDelete: any): void;
    update(deltaTime: any, currentTime: any): void;
    setup(): void;
    loop(deltaTime: any, currentTime: any): void;
    #private;
}
