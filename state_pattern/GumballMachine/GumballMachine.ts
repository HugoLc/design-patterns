import HasQuarterState from "./states/HasQuarterState";
import IState from "./states/IState";
import NoQuarterState from "./states/NoQuarterState";
import SoldOutState from "./states/SoldOutState";
import SoldState from "./states/SoldState";
import WinnerState from "./states/WinnerState";

export default class GumballMachine {
  private soldOutState: IState;
  private noQuarterState: IState;
  private hasQuarterState: IState;
  private soldState: IState;
  private winnerState: IState;
  private state: IState;
  private count: number = 0;

  constructor(numberGumballs: number) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);
    this.winnerState = new WinnerState(this);

    this.count = numberGumballs;

    if (numberGumballs > 0) {
      this.state = this.noQuarterState;
    } else {
      this.state = this.soldOutState;
    }
  }

  insertQuarter(): void {
    this.state.insertQuarter();
  }

  ejectQuarter(): void {
    this.state.ejectQuarter();
  }

  turnCrank(): void {
    this.state.turnCrank();
    this.state.dispense();
  }

  setState(state: IState): void {
    this.state = state;
  }

  releaseBall(): void {
    console.log("A gumball comes rolling out the slot...");
    if (this.count > 0) {
      this.count--;
    }
  }

  isWinner() {
    const prizeDraw = Math.floor(Math.random() * 10) + 1;
    return prizeDraw === 1; //10%
  }

  getCount(): number {
    return this.count;
  }

  setCount(newRecharge: number): void {
    this.count += newRecharge;
  }

  getSoldOutState(): IState {
    return this.soldOutState;
  }

  getNoQuarterState(): IState {
    return this.noQuarterState;
  }

  getHasQuarterState(): IState {
    return this.hasQuarterState;
  }

  getSoldState(): IState {
    return this.soldState;
  }
  getWinnerState(): IState {
    return this.winnerState;
  }
}
