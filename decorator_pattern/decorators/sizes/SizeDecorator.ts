import Beverage from "../../components/Beverage";

export default abstract class SizeDecorator extends Beverage {
  abstract readonly costPercentage: number;
  constructor(readonly bev: Beverage) {
    super();
  }
}
