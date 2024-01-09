import Pizza from "./Pizza";

export default class NYPepperoniPizza extends Pizza {
  constructor() {
    super();
    this.name = "NY Pepperoni Pizza";
    this.dough = "Regular Crust";
    this.sauce = "Marinara Pizza Sauce";
    this.toppings.push("Fresh Mozzarella");
    this.toppings.push("Parmesan");
  }
}
