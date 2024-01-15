import Command from "../commands/Command";
import NoCommand from "../commands/NoCommand";

export default class RemoteControl {
  onCommands: Command[];
  offCommands: Command[];
  undoCommand: Command;
  constructor() {
    const noCommand = new NoCommand();
    this.onCommands = new Array<Command>(7);
    this.offCommands = new Array<Command>(7);
    this.undoCommand = noCommand;
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    try {
      this.onCommands[slot] = onCommand;
      this.offCommands[slot] = offCommand;
    } catch (error) {
      console.error(error);
    }
  }

  onButtonWasPressed(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  offButtonWasPressed(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  undoButtonWasPushed() {
    this.undoCommand.undo;
  }

  display() {
    for (let index = 0; index < 7; index++) {
      console.log(
        `slot ${index} => on: ${typeof this.onCommands[
          index
        ]} / off: ${typeof this.offCommands[index]}`
      );
    }
  }
}
