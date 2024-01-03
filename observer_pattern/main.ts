// The Observer Pattern defines a one-to-many
// dependency between objects so that when one
// object changes state, all of its dependents are
// notified and updated automatically

import CurrentConditionsDisplay from "./observers/CurrentConditionsDisplay";
import WeatherData from "./subject/WeatherData";

const weatherData = new WeatherData();

const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
// const statsDisplay = new StatisticsDisplay(weatherData);
// const forecastDisplay = new ForecastDisplay(weatherData);

weatherData.setMeasurements(32, 40, 1000);
weatherData.setMeasurements(35, 40, 1200);
weatherData.setMeasurements(40, 30, 1300);
