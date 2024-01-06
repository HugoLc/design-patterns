import Beverage from "../../components/Beverage";
import CondimentDecorator from "./CondimentDecorator";

export default class Mocha extends CondimentDecorator {
  readonly description = "mocha";
  private myCost = 0.3;
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
