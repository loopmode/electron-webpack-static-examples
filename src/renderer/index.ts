// bundled stylesheet
import "./styles.css";

import getStatic from "./utils/getStatic";

// static stylesheet
const theme = document.createElement("link");
theme.setAttribute("rel", "stylesheet");
theme.setAttribute("type", "text/css");
theme.setAttribute("href", getStatic("theme.css"));
document.head.appendChild(theme);

document.write(`<img class="logo" src="${getStatic("electron.png")}" />`); 
document.write(`<h1>${require("../../package.json").name}</h1>`);
document.write(`<p>${require("../../package.json").description}</p>`);
document.write(`<code>env: ${process.env.NODE_ENV}</code>`);
document.write(`<code>static path: ${getStatic("")}</code>`);
