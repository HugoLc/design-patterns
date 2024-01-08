import NYCheesePizza from "../pizzas/NYCheesePizza";
import NYClamPizza from "../pizzas/NYClamPizza";
import NYPepperoniPizza from "../pizzas/NYPepperoniPizza";
import NYVeggiePizza from "../pizzas/NYVeggiePizza";
import Pizza from "../pizzas/Pizza";
import PizzaStore from "./PizzaStore";

export default class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    //pizza NY style
    let pizza: Pizza;
    if (type === "cheese") {
      pizza = new NYCheesePizza();
    } else if (type === "pepperoni") {
      pizza = new NYPepperoniPizza();
    } else if (type === "clam") {
      pizza = new NYClamPizza();
    } else if (type === "veggie") {
      pizza = new NYVeggiePizza();
    } else {
      throw new Error("No type found");
    }
    return pizza;
  }
}
