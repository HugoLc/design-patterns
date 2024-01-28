import DuckCall from "../DuckCall";
import MallardDuck from "../MallardDuck";
import RedHeadDuck from "../RedHeadDuck";
import RubberDuck from "../RubberDuck";
import IQuackable from "../interfaces/IQuackable";
import AbstractDuckFactory from "./AbstractDuckFactory";

export default class DuckFactory extends AbstractDuckFactory {
  createRedHeadDuck(): IQuackable {
    return new RedHeadDuck();
  }
  createRubberDuck(): IQuackable {
    return new RubberDuck();
  }
  createDuckCall(): IQuackable {
    return new DuckCall();
  }
  createMallardDuck(): IQuackable {
    return new MallardDuck();
  }
}
