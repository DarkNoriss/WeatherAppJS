const tempSign = "c";

export const createApp = () => {
  const mainContainer = document.querySelector(".main-container");
  const div = document.createElement("div");
  div.classList.add("app");

  const location = document.createElement("span");
  location.classList.add("location");
  location.setAttribute("data-location", "");
  div.append(location);

  const iconCurrent = document.createElement("img");
  iconCurrent.classList.add("current-icon");
  iconCurrent.setAttribute("data-current-icon", "");
  div.append(iconCurrent);

  const tempCurrent = document.createElement("div");
  tempCurrent.classList.add("current-temp");

  const tempCurrentText = document.createElement("span");
  tempCurrentText.setAttribute("data-current-temp", "");
  tempCurrent.append(tempCurrentText);

  const tempCurrentSign = document.createElement("span");
  tempCurrentSign.setAttribute("data-temp-sign", "");
  tempCurrent.append(tempCurrentSign);

  div.append(tempCurrent);

  mainContainer.append(div);
};

export const putDataToApp = (data) => {
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
};

const setCurrentIcon = (data) => {
  const condition = data.condition;
  const iconTime = getIconTime(condition);
  const iconId = getIconId(condition);

  const currentIcon = document.querySelector("[data-current-icon]");
  currentIcon.src = `https://raw.githubusercontent.com/DarkNoriss/WeatherApp/master/src/icons/${iconTime}/${iconId}.svg`;

  setBg(iconTime);
};

const setCurrentTemp = (data) => {
  const currentTemp = document.querySelector("[data-current-temp]");

  if (tempSign == "c") return (currentTemp.innerText = `${data.temp_c}\u00B0`);
  return (currentTemp.innerText = `${data.temp_f}\u2109`);
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
