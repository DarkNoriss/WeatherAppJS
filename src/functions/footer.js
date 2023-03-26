export const createFooter = () => {
  const footerDiv = document.querySelector(".footer");

  const footer = document.createElement("a");
  footer.href = "https://github.com/DarkNoriss";
  footer.target = "__blank";

  const icon = document.createElement("i");
  icon.classList.add("fa-brands");
  icon.classList.add("fa-github");
  footer.append(icon);

  const text = document.createElement("p");
  text.innerText = "DarkNoriss";
  footer.append(text);

  footerDiv.append(footer);
};
