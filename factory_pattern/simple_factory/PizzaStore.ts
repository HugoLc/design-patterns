import SimplePizzaFactory from "./SimplePizzaFactory";
import Pizza from "./pizzas/Pizza";

export default class PizzaStore {
  factory: SimplePizzaFactory;
  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }
  orderPizza(type: string) {
    let pizza: Pizza;
    pizza = this.factory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }
}
