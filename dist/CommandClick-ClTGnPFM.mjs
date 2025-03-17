var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { I as ImplementError } from "./ImplementError-BSFja-GU.mjs";
class Command {
  constructor() {
    __publicField(this, "key");
  }
  execute() {
    throw new ImplementError("execute", "Command");
  }
}
class CommandClick extends Command {
  execute(...parameters) {
    throw new ImplementError("execute", "CommandClick");
  }
}
export {
  CommandClick as C,
  Command as a
};
//# sourceMappingURL=CommandClick-ClTGnPFM.mjs.map
