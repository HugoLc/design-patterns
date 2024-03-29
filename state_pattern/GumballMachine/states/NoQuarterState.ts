import GumballMachine from "../GumballMachine";
import IState from "./IState";

export default class NoQuarterState implements IState {
  private gumballMachine: GumballMachine;

  constructor(gumballMachine: GumballMachine) {
    this.gumballMachine = gumballMachine;
  }

  insertQuarter(): void {
    console.log("You inserted a quarter");
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }

  ejectQuarter(): void {
    console.log("You haven't inserted a quarter");
  }

  turnCrank(): void {
    console.log("You turned, but there's no quarter");
  }

  dispense(): void {
    console.log("You need to pay first");
  }

  refil(recharge: number): void {
    this.gumballMachine.setCount(recharge);
  }
}
