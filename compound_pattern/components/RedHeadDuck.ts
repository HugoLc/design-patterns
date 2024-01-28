import IQuackable from "./interfaces/IQuackable";

export default class RedHeadDuck implements IQuackable {
  quack(): void {
    console.log("queck");
  }
}
