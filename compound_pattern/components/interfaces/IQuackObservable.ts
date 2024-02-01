import IObserver from "./IObserver";

export default interface IQuackObservable {
  registerObserver(observer:IObserver): void;
  notifyObserver(): void;
}
