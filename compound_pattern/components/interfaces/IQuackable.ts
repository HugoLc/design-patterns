import IQuackObservable from "./IQuackObservable";

export default interface IQuackable extends IQuackObservable {
  quack(): void;
}
