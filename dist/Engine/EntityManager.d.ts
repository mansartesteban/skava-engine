export default EntityManager;
declare class EntityManager {
    static EVENTS: Readonly<{
        ENTITY_ADDED: "ENTITY_ADDED";
        ENTITY_DELETED: "ENTITY_DELETED";
    }>;
    constructor(scene: any);
    observer: Observer;
    entities: any[];
    scene: any;
    delete(entityToDelete: any): void;
    add(entity: any, executeSetup?: boolean): void;
    update(deltaTime: any, currentTime: any): void;
}
import { Observer } from "@/Bundles/Core";
