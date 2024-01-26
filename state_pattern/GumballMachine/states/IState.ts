export default interface IState {
  insertQuarter: () => void;
  ejectQuarter: () => void;
  turnCrank: () => void;
  dispense: () => void;
  refil: (recharge: number) => void;
}
