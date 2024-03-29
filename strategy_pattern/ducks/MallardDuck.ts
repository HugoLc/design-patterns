import { Duck } from "./Duck";
import FlyWithWings from "../behaviors/Fly/FlyWithWings";
import Quack from "../behaviors/Quack/Quack";

export default class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  swim() {
    console.log("~~~~~~");
  }

  display() {
    console.log("I'm a mallard duck");
  }
}
