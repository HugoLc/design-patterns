import GooseDuck from "./components/GooseDuck";
import GooseAdapter from "./components/adapters/GooseAdapter";
import Flock from "./components/composite/Flock";
import QuackCounter from "./components/decorators/QuackCounter";
import AbstractDuckFactory from "./components/factory/AbstractDuckFactory";
import CountingDuckFactory from "./components/factory/CountingDuckFactory";
import IQuackable from "./components/interfaces/IQuackable";

class DuckSimulator {
  main(): void {
    const simulator = new DuckSimulator();
    const duckFactory: AbstractDuckFactory = new CountingDuckFactory();
    simulator.simulate(duckFactory);
  }

  simulate(duckFactory: AbstractDuckFactory): void {
    const redheadDuck: IQuackable = duckFactory.createRedHeadDuck();
    const duckCall: IQuackable = duckFactory.createDuckCall();
    const rubberDuck: IQuackable = duckFactory.createRubberDuck();
    const gooseDuck: IQuackable = new GooseAdapter(new GooseDuck());

    console.log("\nDuck Simulator: With Composite - Flocks");

    const flockOfDucks: Flock = new Flock();
    flockOfDucks.add(redheadDuck);
    flockOfDucks.add(duckCall);
    flockOfDucks.add(rubberDuck);
    flockOfDucks.add(gooseDuck);

    const flockOfMallards: Flock = new Flock();
    const mallardOne: IQuackable = duckFactory.createMallardDuck();
    const mallardTwo: IQuackable = duckFactory.createMallardDuck();
    const mallardThree: IQuackable = duckFactory.createMallardDuck();
    const mallardFour: IQuackable = duckFactory.createMallardDuck();

    flockOfMallards.add(mallardOne);
    flockOfMallards.add(mallardTwo);
    flockOfMallards.add(mallardThree);
    flockOfMallards.add(mallardFour);

    flockOfDucks.add(flockOfMallards);

    console.log("\nDuck Simulator: Whole Flock Simulation");
    this.simulateDuck(flockOfDucks);

    console.log("\nDuck Simulator: Mallard Flock Simulation");
    this.simulateDuck(flockOfMallards);

    console.log("\nThe ducks quacked " + QuackCounter.getQuack() + " times");
  }

  private simulateDuck(duck: IQuackable): void {
    duck.quack();
  }
}

const simulator = new DuckSimulator();
simulator.main();
