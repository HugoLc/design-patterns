import GumballMachine from "../GumballMachine";
import IState from "./IState";

export default class HasQuarterState implements IState {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log("You can't insert another quarter");
  }

  ejectQuarter(): void {
    console.log("Quarter returned");
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }

  turnCrank(): void {
    console.log("You turned...");
    if (this.gumballMachine.isWinner()) {
      this.gumballMachine.setState(this.gumballMachine.getWinnerState());
    } else {
      this.gumballMachine.setState(this.gumballMachine.getSoldState());
      this.gumballMachine.releaseBall();
    }
  }

  dispense(): void {
    console.log("No gumball dispensed");
  }

  refil(recharge: number): void {
    console.log("The machine is running, it's not posible to recharge now");
  }
}
