export const createApp = () => {
  const mainContainer = document.querySelector(".main");
  const div = document.createElement("div");
  div.classList.add("app");

  const location = document.createElement("p");
  location.innerText = "Poznan";
  div.append(location);
  const icon = document.createElement("img");
  icon.classList.add("main-icon");
  icon.src = "../icons/cloud-bolt-solid.svg";
  icon.width = "500";
  icon.height = "500";
  div.append(icon);

  mainContainer.append(div);
};
