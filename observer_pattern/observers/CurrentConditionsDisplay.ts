import WeatherData from "../subject/WeatherData";
import IDisplay from "./IDisplay";
import IObserver from "./IObserver";

export default class CurrentConditionsDisplay implements IDisplay, IObserver {
  temperature = 0;
  humidity = 0;
  weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this)
  }

  update(temp: number, humidity: number, presure: number) {
    this.temperature = temp;
    this.humidity = humidity;
    this.display();
  }
  display() {
    console.log({
      temp: this.temperature,
      humi: this.humidity,
    });
  }
}
