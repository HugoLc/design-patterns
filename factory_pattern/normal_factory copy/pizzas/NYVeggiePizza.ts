import Pizza from "./Pizza";

export default class NYVeggiePizza extends Pizza {
  constructor() {
    super();
    this.name = "NY Veggie Pizza";
    this.dough = "Regular Crust";
    this.sauce = "Marinara Pizza Sauce";
    this.toppings.push("Fresh Mozzarella");
    this.toppings.push("Parmesan");
  }
}
