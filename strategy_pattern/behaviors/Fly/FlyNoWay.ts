import FlyBehavior from "../interfaces/FlyBehavior";

export default class FlyNoWay implements FlyBehavior {
  fly() {
    console.log("I can't fly");
  }
}
