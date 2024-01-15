import Command from "./Command";

export default class MacroCommand implements Command {
  constructor(readonly commands: Command[]) {}

  execute(): void {
    this.commands.forEach((command) => {
      command.execute();
    });
  }
  undo(): void {
    this.commands.forEach((command) => {
      command.undo();
    });
  }
}
