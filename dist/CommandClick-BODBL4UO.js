"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const ImplementError = require("./ImplementError-1IS0II9w.js");
class Command {
  constructor() {
    __publicField(this, "key");
  }
  execute() {
    throw new ImplementError.ImplementError("execute", "Command");
  }
}
class CommandClick extends Command {
  execute(...parameters) {
    throw new ImplementError.ImplementError("execute", "CommandClick");
  }
}
exports.Command = Command;
exports.CommandClick = CommandClick;
//# sourceMappingURL=CommandClick-BODBL4UO.js.map
