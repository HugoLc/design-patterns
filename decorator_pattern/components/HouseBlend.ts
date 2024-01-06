import Beverage from "./Beverage";

export default class HouseBlend extends Beverage {
  readonly description = "House Blend coffe";
  cost = () => 2.5;
}
