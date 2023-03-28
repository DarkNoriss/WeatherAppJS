import { PATHICONS } from "../constants/constants";

export const createHeader = () => {
  const headerDiv = document.querySelector(".header");

  const form = createForm();
  headerDiv.append(form);
};

const createForm = () => {
  const form = document.createElement("form");
  form.classList.add("form-location");

  const input = createInput();
  form.append(input);

  const button = createButton();
  form.append(button);

  return form;
};

const createInput = () => {
  const input = document.createElement("input");
  input.name = "location";
  input.placeholder = "Search City";
  input.required = true;

  return input;
};

const createButton = () => {
  const btn = document.createElement("button");

  const icon = createIcon();
  btn.append(icon);

  return btn;
};

const createIcon = () => {
  const icon = document.createElement("img");
  icon.src = `${PATHICONS}magnifying-glass.svg`;

  return icon;
};
