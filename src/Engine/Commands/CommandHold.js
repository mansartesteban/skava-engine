import { ImplementError } from "@/Bundles/Errors";
import { Command } from "@/Bundles/Core/Commands";

class CommandHold extends Command {
  execute() {
    throw new ImplementError("execute", "CommandHold");
  }
}

export default CommandHold;
