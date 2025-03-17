export default Engine;
declare class Engine {
    project: any;
    observer: Observer;
    lastUpdate: number;
    fpsMeter: HTMLDivElement;
    timer: Timer;
    setProject(project: any): void;
    i: number;
    loop(currentTime?: number): Promise<void>;
}
import { Observer } from "@/Bundles/Core";
import { Timer } from "@/Bundles/Utils";
