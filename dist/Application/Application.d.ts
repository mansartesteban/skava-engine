export default Application;
declare class Application {
    static activeProject: any;
    static engine: any;
    static start(): Promise<any>;
    static loadProject(project: any, options: any): void;
}
