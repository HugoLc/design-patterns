import IObserver from "../interfaces/IObserver";
import IQuackable from "../interfaces/IQuackable";

export default class Flock implements IQuackable {
  private quackers: IQuackable[] = [];

  add(quacker: IQuackable) {
    this.quackers.push(quacker);
  }

  quack(): void {
    this.quackers.forEach((quacker) => quacker.quack());
  }
  registerObserver(observer: IObserver): void {}
  notifyObserver(): void {}
}
