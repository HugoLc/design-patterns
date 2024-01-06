// The Decorator Pattern attaches additional
// responsibilities to an object dynamically.
// Decorators provide a flexible alternative to
// subclassing for extending functionality.

import Beverage from "./components/Beverage";
import Decaf from "./components/Decaf";
import Mocha from "./decorators/condiments/Mocha";
import Soy from "./decorators/condiments/Soy";
import Large from "./decorators/sizes/Large";

const beverage: Beverage = new Decaf();

const orderedCoffe = new Large(new Soy(new Mocha(beverage)));

console.log("Description: " + orderedCoffe.getDescription());
console.log("Order cost: " + orderedCoffe.cost());
