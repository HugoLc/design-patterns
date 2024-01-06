import Beverage from "../../components/Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Soy extends CondimentDecorator {
  readonly description = "soy";
  private myCost = 0.7;
  constructor(readonly bev: Beverage) {
    super(bev);
  }
  cost(): number {
    console.log(`${this.description} cost = ${this.myCost}`);
    return this.beverage.cost() + this.myCost;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, ${this.description}`;
  }
}
