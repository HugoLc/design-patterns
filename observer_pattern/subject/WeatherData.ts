import IObserver from "../observers/IObserver";
import ISubject from "./ISubject";

export default class WeatherData implements ISubject {
  observers: IObserver[] = [];
  temperature = 0;
  humidity = 0;
  presure = 0;

  registerObserver(observer: IObserver) {
    this.observers.push(observer);
  }
  removeObserver(observer: IObserver) {
    this.observers = this.observers.filter(
      (obs) => JSON.stringify(obs) !== JSON.stringify(observer)
    );
  }
  notifyObservers() {
    this.observers.forEach((obs) =>
      obs.update(this.temperature, this.humidity, this.presure)
    );
  }

  measurementsChanged() {
    this.notifyObservers();
  }

  setMeasurements(temp: number, humi: number, pres: number) {
    this.temperature = temp;
    this.humidity = humi;
    this.presure = pres;
    this.measurementsChanged();
  }
}
