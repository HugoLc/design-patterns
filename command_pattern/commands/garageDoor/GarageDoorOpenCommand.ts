import GarageDoor from "../../receivers/GarageDoor";
import Command from "../Command";

export default class GarageDoorOpenCommand implements Command {
  constructor(readonly garageDoor: GarageDoor) {}
  execute(): void {
    this.garageDoor.open();
  }
  undo(): void {
    this.garageDoor.close();
  }
}
