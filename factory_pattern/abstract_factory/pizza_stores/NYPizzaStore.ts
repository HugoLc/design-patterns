import NYPizzaIngredientsFactory from "../ingredients/factories/NYPizzaIngredientsFactory";
import NYCheesePizza from "../pizzas/NYCheesePizza";
import NYClamPizza from "../pizzas/NYClamPizza";
import NYPepperoniPizza from "../pizzas/NYPepperoniPizza";
import NYVeggiePizza from "../pizzas/NYVeggiePizza";
import Pizza from "../pizzas/Pizza";
import PizzaStore from "./PizzaStore";

export default class NYPizzaStore extends PizzaStore {
  createPizza(type: string): Pizza {
    //pizza NY style
    const ingredientFactory = new NYPizzaIngredientsFactory();
    let pizza: Pizza;
    if (type === "cheese") {
      pizza = new NYCheesePizza(ingredientFactory);
    } else if (type === "pepperoni") {
      pizza = new NYPepperoniPizza(ingredientFactory);
    } else if (type === "clam") {
      pizza = new NYClamPizza(ingredientFactory);
    } else if (type === "veggie") {
      pizza = new NYVeggiePizza(ingredientFactory);
    } else {
      throw new Error("No type found");
    }
    return pizza;
  }
}
