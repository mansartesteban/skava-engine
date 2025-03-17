import { ImplementError } from "@/Bundles/Errors";
import { Command } from "@/Bundles/Core/Commands";

class CommandTouchMaintain extends Command {
  started = false;

  release(...parameters) {
    throw new ImplementError("release", "CommandTouchMaintain");
  }

  execute(...parameters) {
    throw new ImplementError("execute", "CommandTouchMaintain");
  }
}

export default CommandTouchMaintain;
