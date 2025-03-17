import ImplementError from "@errors/ImplementError";
import Command from "./Command";

class CommandSwipe extends Command {
  execute(...parameters) {
    throw new ImplementError("execute", "CommandSwipe");
  }
}

export default CommandSwipe;
