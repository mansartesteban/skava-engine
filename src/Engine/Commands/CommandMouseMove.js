import ImplementError from "@errors/ImplementError";
import Command from "./Command";

class CommandMouseMove extends Command {
  execute(...parameters) {
    throw new ImplementError("execute", "CommandMouseMove");
  }
}

export default CommandMouseMove;
