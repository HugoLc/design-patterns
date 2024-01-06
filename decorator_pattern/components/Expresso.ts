import Beverage from "./Beverage";

export default class Expresso extends Beverage {
  readonly description = "Expresso coffe";
  cost= () => 1.99;
}
