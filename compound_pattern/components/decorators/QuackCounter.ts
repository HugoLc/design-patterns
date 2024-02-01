import IObserver from "../interfaces/IObserver";
import IQuackable from "../interfaces/IQuackable";
import Observable from "../observer/Observable";

export default class QuackCounter implements IQuackable {
  private static quackCounter = 0;
  private observable;

  constructor(private duck: IQuackable) {
    this.observable = new Observable(this);
  }
  registerObserver(observer: IObserver): void {
    this.observable.registerObserver(observer);
  }
  notifyObserver(): void {
    this.observable.notifyObserver();
  }
  quack(): void {
    this.duck.quack();
    QuackCounter.quackCounter++;
  }
  static getQuack() {
    return this.quackCounter;
  }
}
