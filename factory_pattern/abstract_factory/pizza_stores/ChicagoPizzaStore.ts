import CheesePizza from "../pizzas/ChicagoCheesePizza";
import ClamPizza from "../pizzas/ChicagoClamPizza";
import PepperoniPizza from "../pizzas/ChicagoPepperoniPizza";
import Pizza from "../pizzas/Pizza";
import VeggiePizza from "../pizzas/ChicagoVeggiePizza";
import PizzaStore from "./PizzaStore";
import ChicagoPizzaIngredientsFactory from "../ingredients/factories/ChicagoPizzaIngredientsFactory";

export default class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    //pizza Chicago style
    const ingredientFactory = new ChicagoPizzaIngredientsFactory();
    let pizza: Pizza;
    if (type === "cheese") {
      pizza = new CheesePizza(ingredientFactory);
    } else if (type === "pepperoni") {
      pizza = new PepperoniPizza(ingredientFactory);
    } else if (type === "clam") {
      pizza = new ClamPizza(ingredientFactory);
    } else if (type === "veggie") {
      pizza = new VeggiePizza(ingredientFactory);
    } else {
      throw new Error("No type found");
    }
    return pizza;
  }
}
