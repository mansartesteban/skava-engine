export default CameraManager;
declare class CameraManager {
    constructor(scene: any, renderer: any);
    cameras: {};
    renderer: any;
    scene: any;
    get activeCamera(): any;
    activateCamera(name: any): void;
    addCamera(name: any, camera: any): void;
    #private;
}
