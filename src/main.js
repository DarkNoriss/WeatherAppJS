import "./style/main.scss";
import { createHeader } from "./functions/header";
import { createFooter } from "./functions/footer";
import { createApp } from "./functions/app";

window.onload = () => {
  createHeader();
  createApp();
  createFooter();
};
