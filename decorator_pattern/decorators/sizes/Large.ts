import Beverage from "../../components/Beverage";
import SizeDecorator from "./SizeDecorator";

export default class Large extends SizeDecorator {
  readonly description = "large";
  costPercentage = 0.5;
  constructor(readonly bev: Beverage) {
    super(bev);
  }
  getDescription(): string {
    return `${this.bev.getDescription()}, ${this.description}`;
  }
  cost() {
    return this.bev.cost() * (1 + this.costPercentage);
  }
}
