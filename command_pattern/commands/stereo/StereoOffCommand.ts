import Command from "../Command";
import Stereo from "../../receivers/Stereo";

export default class StereoOffCommand implements Command {
  constructor(readonly stereo: Stereo) {}

  execute(): void {
    this.stereo.off();
  }
  undo(): void {
    this.stereo.on();
  }
}
