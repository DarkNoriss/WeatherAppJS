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
  // prevent form from refreshing the page and set location, and data to const
  event.preventDefault();
  const location = event.target[0].value;
  const data = await fetchWeatherData(`${location}`);

  // if theres error dont try to put data into the app
  if (data.error != undefined) {
    console.log("ERROR");
  } else {
    putDataToApp(data);
  }

  // reset form input
  getForm().reset();
};
