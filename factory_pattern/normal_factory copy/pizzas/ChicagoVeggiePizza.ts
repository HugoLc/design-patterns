import Pizza from "./Pizza";

export default class ChicagoVeggiePizza extends Pizza {
  constructor() {
    super();
    this.name = "Chicago Veggie Pizza";
    this.dough = "Regular Crust";
    this.sauce = "Marinara Pizza Sauce";
    this.toppings.push("Fresh Mozzarella");
    this.toppings.push("Parmesan");
  }
}
