import RegiannoCheese from "../cheese/RegianoCheese";
import FreshClam from "../clam/FreshClam";
import ThinCrustyDough from "../dough/ThinCrustyDough";
import { SlicedPepperoni } from "../pepperoni/SlicedPepperoni";
import MarianaraSauce from "../sauce/MarinaraSauce";
import Garlic from "../veggie/Garlic";
import Tomato from "../veggie/Tomato";
import PizzaIngredientsFactory from "./PizzaIngredientsFactory";

export default class NYPizzaIngredientsFactory
  implements PizzaIngredientsFactory
{
  createDough() {
    return new ThinCrustyDough();
  }
  createSauce() {
    return new MarianaraSauce();
  }
  createCheese() {
    return new RegiannoCheese();
  }
  createVeggie() {
    return [new Garlic(), new Tomato()];
  }
  createPepperoni() {
    return new SlicedPepperoni();
  }
  createClam() {
    return new FreshClam();
  }
}
