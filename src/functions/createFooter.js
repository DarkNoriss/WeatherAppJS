export const createFooter = () => {
  const footerDiv = document.querySelector(".footer");
  const footer = document.createElement("a");
  footer.href = "https://github.com/DarkNoriss";
  footer.target = "__blank";
  footer.classList.add("fa");
  footer.classList.add("fa-github");
  footer.innerText = " DarkNoriss";

  footerDiv.append(footer);
};
