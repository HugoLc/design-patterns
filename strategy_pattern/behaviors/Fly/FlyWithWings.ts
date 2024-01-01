import FlyBehavior from "../interfaces/FlyBehavior";

export default class FlyWithWings implements FlyBehavior {
  fly() {
    console.log("flap flap flap");
  }
}
