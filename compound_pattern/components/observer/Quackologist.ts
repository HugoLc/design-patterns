import IObserver from "../interfaces/IObserver";
import IQuackObservable from "../interfaces/IQuackObservable";

export default class Quackologist implements IObserver {
  update(duck: IQuackObservable): void {
    console.log(`Quackologist: ${duck} just quacked`);
  }
}
