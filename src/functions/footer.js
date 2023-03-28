import { PATHICONS } from "../constants/constants";

export const createFooter = () => {
  const footer = document.querySelector(".footer");

  const link = createLink();
  return footer.append(link);
};

const createLink = () => {
  const link = document.createElement("a");
  link.href = "https://github.com/DarkNoriss";
  link.target = "__blank";

  const img = createImg();
  link.append(img);

  const text = createText();
  link.append(text);

  return link;
};

const createImg = () => {
  const icon = document.createElement("img");
  icon.src = `${PATHICONS}github.svg`;

  return icon;
};

const createText = () => {
  const text = document.createElement("p");
  text.innerText = "DarkNoriss";

  return text;
};
