import Command from "../commands/Command";

export default class SimpleRemoteControl {
  slot: Command | undefined;
  setCommand(command: Command) {
    this.slot = command;
  }
  buttonWasPressed() {
    this.slot?.execute();
  }
}
