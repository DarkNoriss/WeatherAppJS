let tempSign = "c";

export const createApp = () => {
  const mainContainer = document.querySelector(".main");
  const div = document.createElement("div");
  div.classList.add("app");

  // Text with location
  const location = document.createElement("span");
  location.classList.add("location");
  location.setAttribute("data-location", "");
  location.innerText = "Poznan";
  div.append(location);

  // Icon with current weather

  const iconCurrent = document.createElement("div");
  iconCurrent.classList.add("current-icon");
  iconCurrent.style =
    "background-image: url(https://github.com/DarkNoriss/WeatherApp/blob/master/src/icons/night/clear.svg)";
  iconCurrent.setAttribute("data-current-icon", "");
  div.append(iconCurrent);

  // Info with current temperature
  const tempCurrent = document.createElement("div");
  tempCurrent.classList.add("current-temp");

  const tempCurrentText = document.createElement("span");
  tempCurrentText.setAttribute("data-current-temp", "");
  tempCurrentText.innerText = "32";
  tempCurrent.append(tempCurrentText);

  const tempCurrentSign = document.createElement("span");
  tempCurrentSign.setAttribute("data-temp-sign", "");
  tempCurrentSign.innerText = "\u00B0";
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
  return (locationName.innerText = `${data.location.name}`);
};

const setCurrent = (data) => {
  // setCurrentIcon(data);

  const currentTemp = document.querySelector("[data-current-temp]");
  if (tempSign == "c") currentTemp.innerText = `${data.current.temp_c}`;
  else currentTemp.innerText = `${data.current.temp_f}`;
};

const setCurrentIcon = (data) => {
  const localTime = new Date(data.location.localtime);
  const time = localTime.getHours();
  const condition = data.current.condition.text;
  const currentIcon = document.querySelector("[data-current-icon");
  const iconPng = document.createElement("img");
  iconPng.src = data.current.condition.icon;
  currentIcon.append(iconPng);
  // if (time >= 6 && time < 18) {
  //   // daytime
  //   switch (condition) {
  //     case "Clear":
  //       break;
  //     case "Partly cloudy":
  //       break;
  //     case "Overcast":
  //       break;
  //   }
  // } else {
  //   // nighttime
  //   switch (condition) {
  //     case "Clear":
  //       break;
  //     case "Partly cloudy":
  //       break;
  //     case "Overcast":
  //       break;
  //     case "Cloudy":
  //       break;
  //   }
  // }
};
