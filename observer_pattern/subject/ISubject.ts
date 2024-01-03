import IObserver from "../observers/IObserver";

export default interface ISubject {
  registerObserver: (observer: IObserver) => void;
  removeObserver: (observer: IObserver) => void;
  notifyObservers: () => void;
}
