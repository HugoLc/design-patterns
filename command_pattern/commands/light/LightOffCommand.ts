import Command from "../Command";
import Light from "../../receivers/Light";

export default class LightOffCommand implements Command {
  constructor(readonly light: Light) {}

  execute(): void {
    this.light.off();
  }
  undo(): void {
    this.light.on();
  }
}
