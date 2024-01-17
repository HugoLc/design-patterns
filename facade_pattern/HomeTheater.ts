import Lights from "./Lights";
import Stereo from "./Stereo";
import TV from "./TV";

export default class HomeTheater {
  constructor(
    readonly lights: Lights,
    readonly stereo: Stereo,
    readonly tv: TV
  ) {}

  watchMovie() {
    console.log("-----wathcMovie");
    this.lights.off();
    this.tv.on();
    this.stereo.on();
  }

  watchFootball() {
    console.log("-----wathcFootball");
    this.lights.on();
    this.tv.on();
    this.stereo.on();
  }

  listenRadio() {
    console.log("-----listenRadio");
    this.stereo.on();
    this.stereo.radioOn();
  }

  relaxMusic() {
    console.log("-----relaxMusic");
    this.lights.luminosityPercentage();
    this.stereo.on();
    this.stereo.volumeDown();
    this.tv.off();
  }

  goToSleep() {
    console.log("-----goToSleep");
    this.lights.off();
    this.tv.off();
    this.stereo.off();
  }
}
