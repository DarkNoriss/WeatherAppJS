export const createHeader = () => {
  const headerDiv = document.querySelector(".header");
  const form = document.createElement("form");
  form.classList.add("form-location");

  const input = document.createElement("input");
  input.name = "location";
  input.placeholder = "Search City";
  input.required = true;
  form.append(input);

  const btn = document.createElement("button");
  const icon = document.createElement("img");
  icon.src = "./src/icons/magnifying-glass.svg";
  btn.append(icon);
  form.append(btn);

  headerDiv.append(form);
};
