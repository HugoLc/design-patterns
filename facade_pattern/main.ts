// The Facade Pattern provides a unified interface to a
// set of interfaces in a subsystem. Facade defines a higherlevel interface that makes the subsystem easier to use.

import HomeTheater from "./HomeTheater";
import Lights from "./Lights";
import Stereo from "./Stereo";
import TV from "./TV";

const lights = new Lights();
const stereo = new Stereo();
const tv = new TV();
//facade
const homeTheater = new HomeTheater(lights, stereo, tv);

homeTheater.watchFootball();
homeTheater.relaxMusic();
homeTheater.goToSleep();
