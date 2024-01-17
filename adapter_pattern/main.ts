// The Adapter Pattern converts the interface of a class
// into another interface the clients expect. Adapter lets
// classes work together that couldn’t otherwise because of
// incompatible interfaces.

import TurkeyAdapter from "./adapters/TurkeyAdapter";
import MallardDuck from "./duck/MallardDuck";
import WildTurkey from "./turkey/WildTurkey";

const mallard = new MallardDuck();
const wildTurkey = new WildTurkey();

const turkeyAsDuck = new TurkeyAdapter(wildTurkey);

wildTurkey.gobble();
mallard.quack();
turkeyAsDuck.quack();
