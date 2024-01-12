import Pizza from "./Pizza";

export default class NYClamPizza extends Pizza {
  constructor() {
    super();
    this.name = 'NY Clam Pizza';
    this.dough = 'Regular Crust';
    this.sauce = 'Marinara Pizza Sauce';
    this.toppings.push('Fresh Mozzarella');
    this.toppings.push('Parmesan');
  }
}
