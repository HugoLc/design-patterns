import QuackBehavior from "../interfaces/QuackBehavior";

export default class Squeak implements QuackBehavior {
  quack() {
    console.log("squeak squeak");
  }
}
