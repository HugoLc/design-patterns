import GumballMachine from "../GumballMachine";
import IState from "./IState";

export default class SoldOutState implements IState {
  constructor(private gumballMachine: GumballMachine) {}

  insertQuarter(): void {
    console.log("You can't insert a quarter, the machine is sold out");
  }

  ejectQuarter(): void {
    console.log("You can't eject, you haven't inserted a quarter yet");
  }

  turnCrank(): void {
    console.log("You turned, but there are no gumballs");
  }

  dispense(): void {
    console.log("No gumball dispensed");
  }

  refil(recharge: number): void {
    this.gumballMachine.setCount(recharge);
  }
}
