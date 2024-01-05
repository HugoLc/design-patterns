import Beverage from "./Beverage";

export default class Expresso extends Beverage {
  constructor(readonly description: string) {
    super();
  }
  cost: () => number;
}
