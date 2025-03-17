import { I as t } from "../ImplementError-CTSVZ3oY.mjs";
import { C as o } from "../Vector2-DsmbReYL.mjs";
import "../Time-DerQyAzN.mjs";
import "uuid";
import { T as u } from "../TransformComponent-CwHP_qGK.mjs";
class a extends o {
  constructor(e) {
    super(), this.options = {
      updateFrequency: 16
    }, e && (this.options = { ...this.options, ...e });
  }
  updateComponent(e, r) {
    this.render(this.entity.scene.viewer, e, r);
  }
  render(e, r, m) {
    throw new t("render", "RenderComponent");
  }
}
export {
  a as Render2DComponent,
  u as TransformComponent
};
