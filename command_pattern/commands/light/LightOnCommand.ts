import Command from "../Command";
import Light from "../../receivers/Light";

export default class LightOnCommand implements Command {
  constructor(readonly light: Light) {}

  execute(): void {
    this.light.on();
  }
  undo(): void {
    this.light.off()
  }
}
