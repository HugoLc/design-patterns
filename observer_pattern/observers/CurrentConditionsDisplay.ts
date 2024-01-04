import WeatherData from "../subject/WeatherData";
import IDisplay from "./IDisplay";
import IObserver from "./IObserver";

export default class CurrentConditionsDisplay implements IDisplay, IObserver {
  temperature = 0;
  humidity = 0;
  weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  update() {
    this.temperature = this.weatherData.getTemperature();
    this.humidity = this.weatherData.getHumidity();
    this.display();
  }
  display() {
    console.log({
      temp: this.temperature,
      humi: this.humidity,
    });
  }
}
