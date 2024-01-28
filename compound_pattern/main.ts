import GooseAdapter from "./components/adapters/GooseAdapter";
import QuackCounter from "./components/decorators/QuackCounter";
import GooseDuck from "./components/GooseDuck";
import IQuackable from "./components/interfaces/IQuackable";
import MallardDuck from "./components/MallardDuck";
import RedHeadDuck from "./components/RedHeadDuck";
import RubberDuck from "./components/RubberDuck";

function simulate(duck?: IQuackable) {
  if (duck) {
    duck.quack();
    return;
  }
  const mallardDuck: IQuackable = new QuackCounter(new MallardDuck());
  const redHeadDuck: IQuackable = new QuackCounter(new RedHeadDuck());
  const rubberDuck: IQuackable = new QuackCounter(new RubberDuck());
  const duckCall: IQuackable = new QuackCounter(new MallardDuck());
  const gooseAdapter = new GooseAdapter(new GooseDuck());
  simulate(mallardDuck);
  simulate(redHeadDuck);
  simulate(rubberDuck);
  simulate(duckCall);
  simulate(gooseAdapter);
  console.log(QuackCounter.getQuack() + " quacks");
}

simulate();
