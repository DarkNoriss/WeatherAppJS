import "./style/main.scss";
import { createHeader } from "./functions/header";
import { createFooter } from "./functions/footer";
import { createApp, putDataToApp } from "./functions/app";
import { fetchWeatherData } from "./functions/weatherData";
import { getForm } from "./functions/utils/getForm";

window.onload = () => {
  createHeader();
  createApp();
  createFooter();
  getForm().addEventListener("submit", submit);
};

const submit = async (event) => {
  event.preventDefault();
  const location = event.target[0].value;
  const data = await fetchWeatherData(`${location}`);

  if (data.error != undefined) {
    console.log("ERROR");
  } else {
    putDataToApp(data);
  }

  getForm().reset();
};
