import Command from "../Command";
import Stereo from "../../receivers/Stereo";

export default class StereoOnCommand implements Command {
  constructor(readonly stereo: Stereo) {}

  execute(): void {
    this.stereo.on();
  }
  undo(): void {
    this.stereo.off();
  }
}
