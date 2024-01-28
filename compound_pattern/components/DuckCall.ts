import IQuackable from "./interfaces/IQuackable";

export default class DuckCall implements IQuackable {
  quack(): void {
    console.log("quack");
  }
}
