import Beverage from "../../components/Beverage";
import SizeDecorator from "./SizeDecorator";

export default class Medium extends SizeDecorator {
  readonly description = "medium";
  costPercentage = 0.2;
  constructor(readonly bev: Beverage) {
    super(bev);
  }
  getDescription(): string {
    return `${this.bev.description}, ${this.description}`;
  }
  cost() {
    return this.bev.cost() * (1 + this.costPercentage);
  }
}
