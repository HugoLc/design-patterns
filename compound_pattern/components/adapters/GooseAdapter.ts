import GooseDuck from "../GooseDuck";
import IQuackable from "../interfaces/IQuackable";

export default class GooseAdapter implements IQuackable {
  constructor(private goose: GooseDuck) {}
  quack(): void {
    this.goose.honk();
  }
}
