import GumballMachine from "../GumballMachine";
import IState from "./IState";

export default class WinnerState implements IState {
  constructor(private gumballMachine: GumballMachine) {}
  insertQuarter(): void {
    console.log("Please wait, we're already giving you a gumball");
  }
  ejectQuarter(): void {
    console.log("Sorry, you already turned the crank");
  }
  turnCrank(): void {
    console.log("Turning twice doesn't get you another gumball!");
  }
  dispense(): void {
    console.log("A gumball comes rolling out the slot");
    this.gumballMachine.releaseBall();

    if (this.gumballMachine.getCount() === 0) {
      console.log("Oops, out of gumballs!");
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
      return;
    }

    console.log("You are the winner!!! Here's another gumball");
    this.gumballMachine.releaseBall();

    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
    } else {
      console.log("Oops, out of gumballs!");
      this.gumballMachine.setState(this.gumballMachine.getSoldOutState());
    }
  }
  refil(recharge: number): void {
    console.log("The machine is running, it's not posible to recharge now");
  }
}
