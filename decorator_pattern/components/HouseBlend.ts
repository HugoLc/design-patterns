import Beverage from "./Beverage";

export default class HouseBlend extends Beverage {
  constructor(readonly description: string) {
    super();
  }
  cost: () => number;
}
