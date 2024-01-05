import Beverage from "./Beverage";

export default class DarkRoast extends Beverage {
  constructor(readonly description: string) {
    super();
  }
  cost: () => number;
}
