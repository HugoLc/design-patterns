import GarageDoor from "../../receivers/GarageDoor";
import Command from "../Command";

export default class GarageDoorCloseCommand implements Command {
  constructor(readonly garageDoor: GarageDoor) {}
  execute(): void {
    this.garageDoor.close();
  }
  undo(): void {
    this.garageDoor.open();
  }
}
