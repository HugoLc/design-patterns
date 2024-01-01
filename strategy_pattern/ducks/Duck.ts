import FlyBehavior from "../behaviors/interfaces/FlyBehavior";
import QuackBehavior from "../behaviors/interfaces/QuackBehavior";

export abstract class Duck {
  flyBehavior;
  quackBehavior;
  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.flyBehavior = flyBehavior;
    this.quackBehavior = quackBehavior;
  }

  performQuack() {
    this.quackBehavior.quack();
  }
  performFly() {
    this.flyBehavior.fly();
  }

  setFlyBehavior(flyBehavior: FlyBehavior) {
    this.flyBehavior = flyBehavior;
  }
  setQuackBehavior(quackBehavior: QuackBehavior) {
    this.quackBehavior = quackBehavior;
  }

  abstract swim(): void;
  abstract display(): void;
}
