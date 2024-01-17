import TurkeyAdapter from "./adapters/TurkeyAdapter";
import MallardDuck from "./duck/MallardDuck";
import WildTurkey from "./turkey/WildTurkey";

const mallard = new MallardDuck()
const wildTurkey = new WildTurkey()

const turkeyAsDuck =  new TurkeyAdapter(wildTurkey)

wildTurkey.gobble()
mallard.quack()
turkeyAsDuck.quack()