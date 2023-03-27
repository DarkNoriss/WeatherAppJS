import { getWeatherConditions } from "./weatherData";

const tempSign = "c";

export const createApp = () => {
  const mainContainer = document.querySelector(".main-container");
  const div = document.createElement("div");
  div.classList.add("app");

  // Text with location
  const location = document.createElement("span");
  location.classList.add("location");
  location.setAttribute("data-location", "");
  div.append(location);

  // Icon with current weather
  const iconCurrent = document.createElement("img");
  iconCurrent.classList.add("current-icon");
  iconCurrent.setAttribute("data-current-icon", "");
  div.append(iconCurrent);

  // Info with current temperature
  const tempCurrent = document.createElement("div");
  tempCurrent.classList.add("current-temp");

  const tempCurrentText = document.createElement("span");
  tempCurrentText.setAttribute("data-current-temp", "");
  tempCurrent.append(tempCurrentText);

  const tempCurrentSign = document.createElement("span");
  tempCurrentSign.setAttribute("data-temp-sign", "");
  tempCurrent.append(tempCurrentSign);

  div.append(tempCurrent);

  // Append the div with all the info to mainContainer
  mainContainer.append(div);
};

export const putDataToApp = (data) => {
  console.log(data);
  setLocation(data);
  setCurrent(data);
};

const setLocation = (data) => {
  const locationName = document.querySelector("[data-location]");
  locationName.innerText = `${data.location.name}`;
};

const setCurrent = (data) => {
  setCurrentIcon(data);

  const currentTemp = document.querySelector("[data-current-temp]");
  if (tempSign == "c") currentTemp.innerText = `${data.current.temp_c}\u00B0`;
  else currentTemp.innerText = `${data.current.temp_f}`;
};

const setCurrentIcon = async (data) => {
  const time = data.current.condition.icon; // get day or nigh base on icon url

  const conditions = getWeatherConditions(); // get array with weather conditions from the imported JSON file
  const dataCondition = data.current.condition.text; // get the current weather condition

  const currentIcon = document.querySelector("[data-current-icon]");
  let iconPath = "";

  if (time.includes("day")) {
    // daytime
    conditions.forEach((element) => {
      if (element.day == dataCondition) {
        iconPath = `https://raw.githubusercontent.com/DarkNoriss/WeatherApp/master/src/icons/day/${element.icon}.svg`;
      }
    });
  } else {
    // nighttime
    conditions.forEach((element) => {
      if (element.night == dataCondition) {
        iconPath = `https://raw.githubusercontent.com/DarkNoriss/WeatherApp/master/src/icons/night/${element.icon}.svg`;
      }
    });
  }

  currentIcon.src = iconPath;
};
