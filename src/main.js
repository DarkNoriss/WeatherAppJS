import "./style/main.scss";
import { createHeader } from "./functions/header";
import { createFooter } from "./functions/footer";

window.onload = () => {
  createHeader();
  createFooter();
};
