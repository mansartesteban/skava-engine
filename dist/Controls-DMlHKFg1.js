"use strict";
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _Controls_instances, onClick_fn, onMouseMove_fn, onTouchMove_fn, onKeyUp_fn, onKeyDown_fn, onTouchStart_fn, onTouchEnd_fn, onSwipe_fn;
const CommandClick = require("./CommandClick-BODBL4UO.js");
const Core_Commands = require("./Core/Commands.cjs.js");
require("./Time-BnYKtbMg.js");
const Vector2 = require("./Vector2-CYfU2A-a.js");
class Controls {
  constructor(pointerLock = false) {
    __privateAdd(this, _Controls_instances);
    __publicField(this, "stack", []);
    __publicField(this, "commands", []);
    __publicField(this, "onceCommandsExecuted", []);
    __publicField(this, "pointerLock", null);
    __publicField(this, "mouse", new Vector2.Vector2());
    __publicField(this, "touchStart", new Vector2.Vector2());
    __publicField(this, "touch", new Vector2.Vector2());
    window.addEventListener("keyup", __privateMethod(this, _Controls_instances, onKeyUp_fn).bind(this));
    window.addEventListener("keydown", __privateMethod(this, _Controls_instances, onKeyDown_fn).bind(this));
    window.addEventListener("mousemove", __privateMethod(this, _Controls_instances, onMouseMove_fn).bind(this));
    window.addEventListener("click", __privateMethod(this, _Controls_instances, onClick_fn).bind(this));
    window.addEventListener("touchstart", __privateMethod(this, _Controls_instances, onTouchStart_fn).bind(this));
    window.addEventListener("touchmove", __privateMethod(this, _Controls_instances, onTouchMove_fn).bind(this));
    window.addEventListener("touchend", __privateMethod(this, _Controls_instances, onTouchEnd_fn).bind(this));
    if (pointerLock) {
      document.onpointerlockchange = () => {
        this.pointerLock = document.pointerLockElement;
      };
      document.body.addEventListener("click", async (e) => {
        e.stopPropagation();
        if (e.which !== 3) {
          await document.body.requestPointerLock({
            unadjustedMovement: true
          });
        }
      });
    }
  }
  registerCommand(command) {
    if (this.commands.some(
      (existingCommand) => existingCommand.key === command.key
    )) {
      console.warn(`Command conflict detected on key : ${command.key}`);
    }
    this.commands.push(command);
    return command;
  }
  unregisterCommand(command) {
    let foundIndex = this.commands.findIndex((cmd) => cmd === command);
    if (foundIndex > -1) {
      this.commands.splice(foundIndex, 1);
    }
  }
  update(deltaTime) {
    let holdCommands = this.commands.filter(
      (command) => command instanceof Core_Commands.CommandHold && this.stack.includes(command.key)
    );
    holdCommands.forEach((command) => {
      command.execute(deltaTime);
    });
  }
}
_Controls_instances = new WeakSet();
onClick_fn = function(e) {
  e.preventDefault();
  let onClickCommands = this.commands.filter(
    (command) => command instanceof CommandClick.CommandClick
  );
  onClickCommands.forEach((command) => {
    command.execute({ mouse: this.mouse });
  });
};
onMouseMove_fn = function(e) {
  this.mouse.x = e.clientX;
  this.mouse.y = e.clientY;
  if (this.pointerLock) {
    let mouseMoveCommands = this.commands.filter(
      (command) => command instanceof Core_Commands.CommandMouseMove
    );
    mouseMoveCommands.forEach((command) => {
      command.execute(e);
    });
  }
};
onTouchMove_fn = function(e) {
  this.touch.x = e.changedTouches[0].screenX;
  this.touch.y = e.changedTouches[0].screenY;
  let touchMaintainCommands = this.commands.filter(
    (command) => command instanceof Core_Commands.CommandTouchMaintain
  );
  touchMaintainCommands.forEach(
    (command) => command.execute({ touchStart: this.touchStart, touch: this.touch })
  );
};
onKeyUp_fn = function(e) {
  if (this.stack.includes(e.code)) {
    let foundIndex = this.stack.findIndex((s) => s === e.code);
    if (foundIndex > -1) {
      this.stack.splice(foundIndex, 1);
    }
  }
  let toggleCommands = this.commands.filter(
    (command) => command instanceof Core_Commands.CommandToggle && e.code === command.key && command.executed
  );
  toggleCommands.forEach((command) => {
    command.executed = false;
    command.release();
  });
  let onceCommands = this.commands.filter(
    (command) => command instanceof Core_Commands.CommandOnce && e.code === command.key && command.executed
  );
  onceCommands.forEach((command) => {
    command.executed = false;
  });
};
onKeyDown_fn = function(e) {
  if (!this.stack.includes(e.code)) {
    this.stack.push(e.code);
  }
  let toggleCommands = this.commands.filter(
    (command) => command instanceof Core_Commands.CommandToggle && e.code === command.key && !command.executed
  );
  toggleCommands.forEach((command) => {
    command.executed = true;
    command.execute();
  });
  let onceCommands = this.commands.filter(
    (command) => command instanceof Core_Commands.CommandOnce && e.code === command.key && !command.executed
  );
  onceCommands.forEach((command) => {
    command.executed = true;
    command.execute();
  });
};
onTouchStart_fn = function(e) {
  this.touchStart.x = e.changedTouches[0].screenX;
  this.touchStart.y = e.changedTouches[0].screenY;
  let touchMaintainCommands = this.commands.filter(
    (command) => command instanceof Core_Commands.CommandTouchMaintain
  );
  touchMaintainCommands.forEach((command) => command.started = true);
};
onTouchEnd_fn = function(e) {
  let touchMaintainCommands = this.commands.filter(
    (command) => command instanceof Core_Commands.CommandTouchMaintain
  );
  touchMaintainCommands.forEach((command) => {
    command.release();
    command.started = false;
  });
  if (this.touchStart.x !== e.changedTouches[0].screenX && this.touchStart.y !== e.changedTouches[0].screenY) {
    __privateMethod(this, _Controls_instances, onSwipe_fn).call(this);
  }
};
onSwipe_fn = function() {
  let swipeCommands = this.commands.filter(
    (command) => command instanceof Core_Commands.CommandSwipe
  );
  swipeCommands.forEach((swipeCommand) => {
    swipeCommand.execute({ touch: this.touch, touchStart: this.touchStart });
  });
};
exports.Controls = Controls;
//# sourceMappingURL=Controls-DMlHKFg1.js.map
