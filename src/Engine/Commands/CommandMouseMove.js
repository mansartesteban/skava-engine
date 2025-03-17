import { ImplementError } from "@/Bundles/Errors";
import { Command } from "@/Bundles/Core/Commands";

class CommandMouseMove extends Command {
  execute(...parameters) {
    throw new ImplementError("execute", "CommandMouseMove");
  }
}

export default CommandMouseMove;
