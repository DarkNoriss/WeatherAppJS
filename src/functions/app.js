import { PATHICONS } from "../constants/constants";
import { getId, getTime } from "./utils/gets";

let tempC = true;
const signC = "\u00B0";
const signF = "\u2109";

export const createApp = () => {
  // set the default bg to daytime
  setBg("day");

  const mainContainer = document.querySelector(".main-container");
  const div = document.createElement("div");
  div.classList.add("app");
  div.style.display = "none";

  const location = createLocation();
  div.append(location);

  const currentIcon = createCurrentIcon();
  div.append(currentIcon);

  const currentTemp = createCurrentTemp();
  div.append(currentTemp);

  const forecast = createForecast();
  div.append(forecast);

  mainContainer.append(div);
};

const createLocation = () => {
  const location = document.createElement("span");
  location.classList.add("location");
  location.setAttribute("data-location", "");

  return location;
};

const createCurrentIcon = () => {
  const icon = document.createElement("img");
  icon.classList.add("current-icon");
  icon.setAttribute("data-current-icon", "");

  return icon;
};

const createCurrentTemp = () => {
  const tempCont = document.createElement("div");
  tempCont.classList.add("current-temp");

  const tempText = document.createElement("span");
  tempText.setAttribute("data-current-temp", "");
  tempCont.append(tempText);

  const tempDesc = document.createElement("span");
  tempDesc.classList.add("current-temp-desc");
  tempDesc.setAttribute("data-current-temp-desc", "");
  tempCont.append(tempDesc);

  return tempCont;
};

const createForecast = () => {
  const container = document.createElement("div");
  container.classList.add("forecast");

  const dayOne = createForecastDay("0");
  container.append(dayOne);

  const dayTwo = createForecastDay("1");
  container.append(dayTwo);

  const dayThree = createForecastDay("2");
  container.append(dayThree);

  return container;
};

const createForecastDay = (index) => {
  const container = document.createElement("div");
  container.classList.add("day");

  const day = document.createElement("span");
  day.setAttribute(`data-forecast-day${index}`, "");
  container.append(day);

  const icon = document.createElement("img");
  icon.setAttribute(`data-forecast-icon${index}`, "");
  container.append(icon);

  const temp = document.createElement("span");
  temp.setAttribute(`data-forecast-temp${index}`, "");
  container.append(temp);

  return container;
};

export const putDataToApp = (data) => {
  // console.log(data); // console.log for feature
  setLocation(data);
  setCurrent(data);
  setForecast(data);
  showApp();
};

const setLocation = (data) => {
  const location = document.querySelector("[data-location]");
  location.innerText = `${data.location.name}`;
};

const setCurrent = (data) => {
  const dataCurrent = data.current;

  setCurrentIcon(dataCurrent);
  setCurrentTemp(dataCurrent);
  setCurrentTempDesc(dataCurrent);
};

const setCurrentIcon = (data) => {
  const condition = data.condition;
  const icon = condition.icon;

  const iconTime = getTime(icon);
  const iconId = getId(icon);

  const currentIcon = document.querySelector("[data-current-icon]");
  currentIcon.src = `${PATHICONS}${iconTime}/${iconId}.svg`;

  setBg(iconTime);
};

const setCurrentTemp = (data) => {
  const dataTemp = tempC ? data.temp_c : data.temp_f;
  const sign = tempC ? signC : signF;

  const currentTemp = document.querySelector("[data-current-temp]");
  currentTemp.innerText = `${dataTemp}${sign}`;
};

const setCurrentTempDesc = (data) => {
  const dataDesc = data.condition.text;

  const currentTempDesc = document.querySelector("[data-current-temp-desc]");
  currentTempDesc.innerText = `${dataDesc}`;
};

const setForecast = (data) => {
  const forecast = data.forecast.forecastday;

  forecast.forEach((element, index) => {
    const date = element.date;
    const options = { day: "2-digit", month: "2-digit" };
    const formattedDate = new Date(date).toLocaleDateString("en-GB", options);

    const dataIcon = element.day.condition.icon;
    const iconTime = getTime(dataIcon);
    const iconId = getId(dataIcon);

    const dataTemp = tempC ? element.day.avgtemp_c : element.day.avgtemp_f;
    const sign = tempC ? signC : signF;

    const day = document.querySelector(`[data-forecast-day${index}]`);
    day.innerText = formattedDate;

    const icon = document.querySelector(`[data-forecast-icon${index}]`);
    icon.src = `${PATHICONS}${iconTime}/${iconId}.svg`;

    const temp = document.querySelector(`[data-forecast-temp${index}]`);
    temp.innerText = `${dataTemp}${sign}`;
  });
};

const setBg = (time) => {
  const body = document.querySelector("body");

  body.classList = "";
  body.classList.add(`${time}`);
};

const showApp = () => (document.querySelector(".app").style.display = "");
