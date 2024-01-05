import Beverage from "./Beverage";

export default class Decaf extends Beverage {
  constructor(readonly description: string) {
    super();
  }
  cost: () => number;
}
