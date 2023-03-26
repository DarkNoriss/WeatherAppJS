export const createHeader = () => {
  const headerDiv = document.querySelector(".header");
  const form = document.createElement("form");
  form.addEventListener("submit", submit);

  const input = document.createElement("input");
  input.name = "location";
  input.required = true;
  form.append(input);

  const btn = document.createElement("button");
  btn.classList.add("fa-solid");
  btn.classList.add("fa-magnifying-glass");
  form.append(btn);

  headerDiv.append(form);
};

const submit = (event) => {
  event.preventDefault();
  const location = event.target[0].value;
  console.log(`nice location ${location}`);
};
