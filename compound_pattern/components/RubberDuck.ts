import IObserver from "./interfaces/IObserver";
import IQuackable from "./interfaces/IQuackable";
import Observable from "./observer/Observable";

export default class RubberDuck implements IQuackable {
  private observable;
  constructor() {
    this.observable = new Observable(this);
  }
  registerObserver(observer: IObserver): void {
    this.observable.registerObserver(observer);
  }

  notifyObserver(): void {
    this.observable.notifyObserver();
  }
  quack(): void {
    console.log("quack");
  }
}
