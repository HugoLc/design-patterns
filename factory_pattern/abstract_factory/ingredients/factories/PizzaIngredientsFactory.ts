import Cheese from "../cheese/Cheese";
import Clam from "../clam/Clam";
import Dough from "../dough/Dough";
import Pepperoni from "../pepperoni/Pepperoni";
import Sauce from "../sauce/Sauce";
import Veggie from "../veggie/Veggie";

export default interface PizzaIngredientsFactory {
  createDough: () => Dough;
  createSauce: () => Sauce;
  createCheese: () => Cheese;
  createVeggie: () => Veggie[];
  createPepperoni: () => Pepperoni;
  createClam: () => Clam;
}
