import Beverage from "./Beverage";

export default class DarkRoast extends Beverage {
  readonly description = "Dark Roast coffe"
  cost= () => 3.00;
}
