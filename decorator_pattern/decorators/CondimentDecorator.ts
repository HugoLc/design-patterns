import Beverage from "../components/Beverage";

export default class CondimentDecorator extends Beverage{
  description: string;
  cost: () => number;
  
}