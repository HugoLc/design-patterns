import SimplePizzaFactory from "../NormalPizzaFactory";
import Pizza from "../pizzas/Pizza";

export default abstract class PizzaStore {
  
  orderPizza(type: string) {
    let pizza: Pizza;
    pizza = this.createPizza(type);
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();
    return pizza;
  }

  abstract createPizza(type:string):Pizza
}
