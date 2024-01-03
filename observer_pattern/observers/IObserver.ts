export default interface IObserver {
  update: (temp: number, humidity: number, presure: number) => void;
}
