import "./style/main.scss";
import { createHeader } from "./functions/header";
import { createFooter } from "./functions/footer";
import { getWeatherData } from "./functions/weatherData";

window.onload = () => {
  createHeader();
  // createApp();
  createFooter();
  // getWeatherData();
};
