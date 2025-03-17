import { C as n } from "../CommandClick-uXVskFqn.mjs";
class c extends n {
  constructor(i) {
    super(), this.elements = i;
  }
  execute({ mouse: i }) {
    i = i.clone();
    let s = this.elements.find((r) => r.transform.position.x + r.scene.viewer.origin.x <= i.x && r.transform.position.x + r.scene.viewer.origin.x + r.transform.size.x >= i.x && r.transform.position.y + r.scene.viewer.origin.y <= i.y && r.transform.position.y + r.scene.viewer.origin.y + r.transform.size.y >= i.y && r.reactToEvents);
    s && s.trigger("click", { mouse: i, element: s });
  }
}
export {
  c as OnClick
};
