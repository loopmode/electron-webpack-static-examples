import "./styles.css";

import getStatic from "./utils/getStatic";

const staticStylesheet = document.createElement("link");
staticStylesheet.setAttribute("rel", "stylesheet");
staticStylesheet.setAttribute("type", "text/css");
staticStylesheet.setAttribute("href", getStatic("theme.css"));
document.head.appendChild(staticStylesheet);

document.write(`<h1>${require("../../package.json").name}</h1>`);
document.write(`<img class="logo" src="${getStatic("electron.png")}" />`);
document.write(`<br />`);
document.write(`<code>env: ${process.env.NODE_ENV}</code>`);
document.write(`<code>static path: ${getStatic("")}</code>`);
