import QuackBehavior from "../interfaces/QuackBehavior";

export default class NoQuack implements QuackBehavior {
  quack() {
    console.log("I can't quack");
  }
}
