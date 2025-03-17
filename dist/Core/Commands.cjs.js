"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const CommandClick = require("../CommandClick-BODBL4UO.js");
const ImplementError = require("../ImplementError-1IS0II9w.js");
class CommandHold extends CommandClick.Command {
  execute() {
    throw new ImplementError.ImplementError("execute", "CommandHold");
  }
}
class CommandMouseMove extends CommandClick.Command {
  execute(...parameters) {
    throw new ImplementError.ImplementError("execute", "CommandMouseMove");
  }
}
class CommandOnce extends CommandClick.Command {
  constructor() {
    super(...arguments);
    __publicField(this, "executed", false);
  }
  execute() {
    throw new ImplementError.ImplementError("execute", "CommandOnce");
  }
}
class CommandSwipe extends CommandClick.Command {
  execute(...parameters) {
    throw new ImplementError.ImplementError("execute", "CommandSwipe");
  }
}
class CommandToggle extends CommandClick.Command {
  constructor() {
    super(...arguments);
    __publicField(this, "executed", false);
  }
  execute() {
    throw new ImplementError.ImplementError("execute", "CommandToggle");
  }
  release() {
    throw new ImplementError.ImplementError("release", "CommandToggle");
  }
}
class CommandTouchMaintain extends CommandClick.Command {
  constructor() {
    super(...arguments);
    __publicField(this, "started", false);
  }
  release(...parameters) {
    throw new ImplementError.ImplementError("release", "CommandTouchMaintain");
  }
  execute(...parameters) {
    throw new ImplementError.ImplementError("execute", "CommandTouchMaintain");
  }
}
exports.Command = CommandClick.Command;
exports.CommandClick = CommandClick.CommandClick;
exports.CommandHold = CommandHold;
exports.CommandMouseMove = CommandMouseMove;
exports.CommandOnce = CommandOnce;
exports.CommandSwipe = CommandSwipe;
exports.CommandToggle = CommandToggle;
exports.CommandTouchMaintain = CommandTouchMaintain;
//# sourceMappingURL=Commands.cjs.js.map
