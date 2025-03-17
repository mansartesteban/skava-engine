import { ImplementError } from "@/Bundles/Errors";
import { Command } from "@/Bundles/Core/Commands";

class CommandClick extends Command {
  execute(...parameters) {
    throw new ImplementError("execute", "CommandClick");
  }
}

export default CommandClick;
