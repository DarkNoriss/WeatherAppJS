import { PATHICONS } from "../constants/constants";

const tempSign = "c";

export const createApp = () => {
  // set the default bg to daytime
  setBg("day");

  const mainContainer = document.querySelector(".main-container");
  const div = document.createElement("div");
  div.classList.add("app");

  div.append(createCurrentLocation());

  div.append(createCurrentIcon());

  div.append(createCurrentTemp());

  mainContainer.append(div);
};

const createCurrentLocation = () => {
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

export const putDataToApp = (data) => {
  console.log(data); // console.log for feature
  setLocation(data);
  setCurrent(data);
};

const setLocation = (data) => {
  const locationName = document.querySelector("[data-location]");
  locationName.innerText = `${data.location.name}`;
};

const setCurrent = (data) => {
  const dataCurrent = data.current;

  setCurrentIcon(dataCurrent);
  setCurrentTemp(dataCurrent);
  setCurrentTempDesc(dataCurrent);
};

const setCurrentIcon = (data) => {
  const condition = data.condition;

  const iconTime = getIconTime(condition);
  const iconId = getIconId(condition);

  const currentIcon = document.querySelector("[data-current-icon]");
  currentIcon.src = `${PATHICONS}${iconTime}/${iconId}.svg`;

  setBg(iconTime);
};

const setCurrentTemp = (data) => {
  const currentTemp = document.querySelector("[data-current-temp]");

  if (tempSign == "c") return (currentTemp.innerText = `${data.temp_c}\u00B0`);
  return (currentTemp.innerText = `${data.temp_f}\u2109`);
};

const setCurrentTempDesc = (data) => {
  const dataDesc = data.condition.text;

  const currentTempDesc = document.querySelector("[data-current-temp-desc]");
  currentTempDesc.innerText = `${dataDesc}`;
};

const getIconTime = (data) => {
  const str = data.icon;

  if (str.includes("day")) return "day";
  return "night";
};

const getIconId = (data) => {
  const str = data.icon;
  return str.match(/\d+(?=\.png$)/)[0];
};

const setBg = (time) => {
  const body = document.querySelector("body");

  body.classList = "";
  body.classList.add(`${time}`);
};
