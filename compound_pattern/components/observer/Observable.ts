import IObserver from "../interfaces/IObserver";
import IQuackObservable from "../interfaces/IQuackObservable";
import IQuackable from "../interfaces/IQuackable";

export default class Observable implements IQuackObservable {
  observers: IObserver[] = [];
  constructor(private duck: IQuackObservable) {}
  registerObserver(observer: IObserver): void {
    this.observers.push(observer);
  }
  notifyObserver(): void {
    this.observers.forEach((observer) => observer.update(this.duck));
  }
}
