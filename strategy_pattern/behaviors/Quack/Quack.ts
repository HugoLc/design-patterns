import QuackBehavior from "../interfaces/QuackBehavior";

export default class Quack implements QuackBehavior {
  quack() {
    console.log("quack quack");
  }
}
