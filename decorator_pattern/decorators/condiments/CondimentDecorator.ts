import Beverage from "../../components/Beverage";

export default abstract class CondimentDecorator extends Beverage {
  constructor(readonly beverage: Beverage) {
    super();
  }
}
