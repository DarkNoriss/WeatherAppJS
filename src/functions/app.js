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

  const iconCurrent = document.createElement("i");
  iconCurrent.classList.add("icon-current");
  iconCurrent.classList.add("fa-solid");
  iconCurrent.classList.add("fa-cloud-bolt");
  iconCurrent.setAttribute("data-icon-current", "");
  iconCurrent.width = "500";
  iconCurrent.height = "500";
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
};
