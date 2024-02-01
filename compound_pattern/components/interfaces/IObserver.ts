import IQuackObservable from "./IQuackObservable";

export default interface IObserver{
    update(duck:IQuackObservable): void
}