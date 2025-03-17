var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { a as Command } from "../CommandClick-ClTGnPFM.mjs";
import { C } from "../CommandClick-ClTGnPFM.mjs";
import { I as ImplementError } from "../ImplementError-BSFja-GU.mjs";
class CommandHold extends Command {
  execute() {
    throw new ImplementError("execute", "CommandHold");
  }
}
class CommandMouseMove extends Command {
  execute(...parameters) {
    throw new ImplementError("execute", "CommandMouseMove");
  }
}
class CommandOnce extends Command {
  constructor() {
    super(...arguments);
    __publicField(this, "executed", false);
  }
  execute() {
    throw new ImplementError("execute", "CommandOnce");
  }
}
class CommandSwipe extends Command {
  execute(...parameters) {
    throw new ImplementError("execute", "CommandSwipe");
  }
}
class CommandToggle extends Command {
  constructor() {
    super(...arguments);
    __publicField(this, "executed", false);
  }
  execute() {
    throw new ImplementError("execute", "CommandToggle");
  }
  release() {
    throw new ImplementError("release", "CommandToggle");
  }
}
class CommandTouchMaintain extends Command {
  constructor() {
    super(...arguments);
    __publicField(this, "started", false);
  }
  release(...parameters) {
    throw new ImplementError("release", "CommandTouchMaintain");
  }
  execute(...parameters) {
    throw new ImplementError("execute", "CommandTouchMaintain");
  }
}
export {
  Command,
  C as CommandClick,
  CommandHold,
  CommandMouseMove,
  CommandOnce,
  CommandSwipe,
  CommandToggle,
  CommandTouchMaintain
};
//# sourceMappingURL=Commands.es.js.map
