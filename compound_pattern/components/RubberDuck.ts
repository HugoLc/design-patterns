import IQuackable from "./interfaces/IQuackable";

export default class RubberDuck implements IQuackable {
  quack(): void {
    console.log("quack");
  }
}
