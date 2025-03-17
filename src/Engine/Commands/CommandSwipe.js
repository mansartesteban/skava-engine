import { ImplementError } from "@/Bundles/Errors";
import { Command } from "@/Bundles/Core/Commands";

class CommandSwipe extends Command {
  execute(...parameters) {
    throw new ImplementError("execute", "CommandSwipe");
  }
}

export default CommandSwipe;
