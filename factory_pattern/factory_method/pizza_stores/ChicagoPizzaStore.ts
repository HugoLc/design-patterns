import CheesePizza from "../pizzas/ChicagoCheesePizza";
import ClamPizza from "../pizzas/ChicagoClamPizza";
import PepperoniPizza from "../pizzas/ChicagoPepperoniPizza";
import Pizza from "../pizzas/Pizza";
import VeggiePizza from "../pizzas/ChicagoVeggiePizza";
import PizzaStore from "./PizzaStore";

export default class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    //pizza Chicago style
    let pizza: Pizza;
    if (type === "cheese") {
      pizza = new CheesePizza();
    } else if (type === "pepperoni") {
      pizza = new PepperoniPizza();
    } else if (type === "clam") {
      pizza = new ClamPizza();
    } else if (type === "veggie") {
      pizza = new VeggiePizza();
    } else {
      throw new Error("No type found");
    }
    return pizza;
  }
}
