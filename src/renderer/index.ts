import getStatic from "./utils/getStatic";
 
const staticStylesheet = document.createElement("link");
staticStylesheet.setAttribute("rel", "stylesheet");
staticStylesheet.setAttribute("type", "text/css");
staticStylesheet.setAttribute("href", getStatic("theme.css"));
document.head.appendChild(staticStylesheet);

document.write(`<h1>${require('../../package.json').name}</h1>`)
document.write(`<img class="logo" src="${getStatic('electron.png')}" />`)
document.write(`<p>env: ${process.env.NODE_ENV}</p>`)
document.write(`<p>static path: ${getStatic('')}</p>`)
