import IQuackable from "../interfaces/IQuackable";

export default abstract class AbstractDuckFactory {
  abstract createMallardDuck(): IQuackable;
  abstract createRedHeadDuck(): IQuackable;
  abstract createDuckCall(): IQuackable;
  abstract createRubberDuck(): IQuackable;
}
