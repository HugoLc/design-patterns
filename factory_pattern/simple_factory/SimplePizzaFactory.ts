import CheesePizza from "./pizzas/CheesePizza";
import ClamPizza from "./pizzas/ClamPizza";
import PepperoniPizza from "./pizzas/PepperoniPizza";
import Pizza from "./pizzas/Pizza";
import VeggiePizza from "./pizzas/VeggiePizza";

export default class SimplePizzaFactory {
  createPizza(type: string) {
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
