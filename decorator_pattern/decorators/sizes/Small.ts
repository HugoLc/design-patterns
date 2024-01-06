import Beverage from "../../components/Beverage";
import SizeDecorator from "./SizeDecorator";

export default class Small extends SizeDecorator {
  readonly description = "small";
  costPercentage = 0.0;
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
