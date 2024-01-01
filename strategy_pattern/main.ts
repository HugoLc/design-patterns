// The Strategy Pattern defines a family of algorithms,
// encapsulates each one, and makes them interchangeable.
// Strategy lets the algorithm vary independently from
// clients that use it.

import FlyNoWay from "./behaviors/Fly/FlyNoWay";
import FlyBehavior from "./behaviors/interfaces/FlyBehavior";
import { Duck } from "./ducks/Duck";
import MallardDuck from "./ducks/MallardDuck";

// criando um Mallard
const mallard: Duck = new MallardDuck();
mallard.display();
mallard.performQuack();
mallard.performFly();

//mudando o comportamento do seu voo
const noFly: FlyBehavior = new FlyNoWay();
mallard.setFlyBehavior(noFly);
mallard.performFly();
