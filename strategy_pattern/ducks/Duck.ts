import FlyBehavior from "../behaviors/interfaces/FlyBehavior";
import QuackBehavior from "../behaviors/interfaces/QuackBehavior";

export abstract class Duck {
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;

  performQuack() {
    this.quackBehavior.quack();
  }
  performFly() {
    this.flyBehavior.fly();
  }

  abstract swim(): void;
  abstract display(): void;
}
