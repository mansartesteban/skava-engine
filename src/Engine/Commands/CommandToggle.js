import { ImplementError } from "@/Bundles/Errors";
import { Command } from "@/Bundles/Core/Commands";

class CommandToggle extends Command {
  executed = false;

  execute() {
    throw new ImplementError("execute", "CommandToggle");
  }

  release() {
    throw new ImplementError("release", "CommandToggle");
  }
}

export default CommandToggle;
