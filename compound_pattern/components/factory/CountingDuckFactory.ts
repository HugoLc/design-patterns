import DuckCall from "../DuckCall";
import MallardDuck from "../MallardDuck";
import RedHeadDuck from "../RedHeadDuck";
import RubberDuck from "../RubberDuck";
import QuackCounter from "../decorators/QuackCounter";
import IQuackable from "../interfaces/IQuackable";
import AbstractDuckFactory from "./AbstractDuckFactory";

export default class CountingDuckFactory extends AbstractDuckFactory {
  createMallardDuck(): IQuackable {
    return new QuackCounter(new MallardDuck());
  }
  createRedHeadDuck(): IQuackable {
    return new QuackCounter(new RedHeadDuck());
  }
  createDuckCall(): IQuackable {
    return new QuackCounter(new DuckCall());
  }
  createRubberDuck(): IQuackable {
    return new QuackCounter(new RubberDuck());
  }
}
