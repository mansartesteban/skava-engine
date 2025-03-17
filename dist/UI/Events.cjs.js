"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const CommandClick = require("../CommandClick-BODBL4UO.js");
class OnClick extends CommandClick.CommandClick {
  constructor(elements) {
    super();
    this.elements = elements;
  }
  execute({ mouse }) {
    mouse = mouse.clone();
    let triggeredElement = this.elements.find((element) => {
      return element.transform.position.x + element.scene.viewer.origin.x <= mouse.x && element.transform.position.x + element.scene.viewer.origin.x + element.transform.size.x >= mouse.x && element.transform.position.y + element.scene.viewer.origin.y <= mouse.y && element.transform.position.y + element.scene.viewer.origin.y + element.transform.size.y >= mouse.y && element.reactToEvents;
    });
    if (triggeredElement) {
      triggeredElement.trigger("click", { mouse, element: triggeredElement });
    }
  }
}
exports.OnClick = OnClick;
//# sourceMappingURL=Events.cjs.js.map
