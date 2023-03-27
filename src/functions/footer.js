export const createFooter = () => {
  const footerDiv = document.querySelector(".footer");

  const footer = document.createElement("a");
  footer.href = "https://github.com/DarkNoriss";
  footer.target = "__blank";

  const icon = document.createElement("div");
  fetch("./src/icons/github.svg")
    .then((response) => response.text())
    .then((svg) => {
      // insert the SVG into the HTML document
      icon.innerHTML = svg;
    });
  footer.append(icon);

  const text = document.createElement("p");
  text.innerText = "DarkNoriss";
  footer.append(text);

  footerDiv.append(footer);
};

// fetch the SVG file
