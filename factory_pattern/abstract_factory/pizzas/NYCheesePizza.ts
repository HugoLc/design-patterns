import PizzaIngredientsFactory from "../ingredients/factories/PizzaIngredientsFactory";
import Pizza from "./Pizza";

export default class NYCheesePizza extends Pizza {
  constructor(readonly pizzaIngredientFactory: PizzaIngredientsFactory) {
    super();
  }
  prepare(): void {
    console.log("Preparing...");
    this.dough = this.pizzaIngredientFactory.createDough();
    this.clam = this.pizzaIngredientFactory.createClam();
    this.sauce = this.pizzaIngredientFactory.createSauce();
    this.cheese = this.pizzaIngredientFactory.createCheese();
    this.veggie = this.pizzaIngredientFactory.createVeggie();
  }
}
