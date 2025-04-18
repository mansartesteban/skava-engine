import { EntityManager, Viewer2d, Vector2 } from "@/Bundles/Core";

class Scene {
  setupFinished = false;

  name = "";
  entityManager = null;
  viewer;
  #loopHasBeenWarned = false;

  constructor(name) {
    this.name = name;
    this.entityManager = new EntityManager(this);
  }

  createViewer(mountOn, options) {
    let app =
      mountOn instanceof HTMLElement
        ? mountOn
        : document.querySelector(mountOn);
    this.viewer = new Viewer2d(app, {
      size: new Vector2(window.innerWidth, window.innerHeight),
      ...options,
    });
  }

  add(entity, executeSetup) {
    this.entityManager.add(entity, executeSetup);
  }

  remove(entityToDelete) {
    this.entityManager.delete(entityToDelete);
  }

  update(deltaTime, currentTime) {
    if (this.setupFinished) {
      this.viewer?.refresh(deltaTime);
      this.loop(deltaTime, currentTime);
      this.entityManager.update(deltaTime, currentTime);
    }
  }

  setup() {
    console.warn(
      `"setup()" method is not implemented on the scene ${this.constructor.name}`
    );
  }
  loop(deltaTime, currentTime) {
    if (!this.#loopHasBeenWarned) {
      this.#loopHasBeenWarned = true;
      console.warn(
        `"loop()" method is not implemented on the scene ${this.constructor.name}`
      );
    }
  }
}

export default Scene;
