import { Engine } from "@/Bundles/Core";

class Application {
  static activeProject;
  static engine;

  static start() {
    this.engine = new Engine();

    return new Promise((resolve) => {
      resolve(true);
    });
  }

  static loadProject(project, options) {
    this.activeProject = new project(options);
    this.engine.setProject(this.activeProject);
  }
}

export default Application;
