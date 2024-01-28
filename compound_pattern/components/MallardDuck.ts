import IQuackable from "./interfaces/IQuackable";

export default class MallardDuck implements IQuackable {
  quack(): void {
    console.log("quack");
  }
}
