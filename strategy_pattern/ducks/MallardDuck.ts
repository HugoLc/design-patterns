import { Duck } from "./Duck";
import FlyWithWings from "../behaviors/Fly/FlyWithWings";
import Quack from "../behaviors/Quack/Quack";

export default class MallardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }

  swim() {
    console.log("~~~~~~");
  }

  display() {
    console.log("I'm a mallard duck");
  }
}
