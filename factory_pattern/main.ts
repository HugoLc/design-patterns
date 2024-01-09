// The Factory Method Pattern defines an interface
// for creating an object, but lets subclasses decide which
// class to instantiate. Factory Method lets a class defer
// instantiation to subclasses

import ChicagoPizzaStore from "./abstract_factory/pizza_stores/ChicagoPizzaStore";
import NYPizzaStore from "./abstract_factory/pizza_stores/NYPizzaStore";

// const pizzaFactory = new SimplePizzaFactory();

// const pizzaStore = new PizzaStore(pizzaFactory);
// const orderedPizza = pizzaStore.orderPizza("pepperoni");
// console.log("Simple factory: ",{ orderedPizza });
/////////////////////////////////////////
const nyStore = new NYPizzaStore();
const nyCheesePizza = nyStore.orderPizza("cheese");

const chicagoStore = new ChicagoPizzaStore();
const chicagoClamPizza = chicagoStore.orderPizza("clam");

console.log(chicagoClamPizza.getName() + " is ready!!");
console.log(nyCheesePizza.getName() + " is ready!!");
