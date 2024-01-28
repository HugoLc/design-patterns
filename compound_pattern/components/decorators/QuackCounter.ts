import IQuackable from "../interfaces/IQuackable";

export default class QuackCounter implements IQuackable {
  private static quackCounter = 0;
  constructor(private duck: IQuackable) {}
  quack(): void {
    this.duck.quack();
    QuackCounter.quackCounter++;
  }
  static getQuack() {
    return this.quackCounter;
  }
}
