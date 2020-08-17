import getStatic from "./utils/getStatic";
 
let linkElt = document.createElement("link");
linkElt.setAttribute("rel", "stylesheet");
linkElt.setAttribute("type", "text/css");
linkElt.setAttribute("href", getStatic("theme.css"));
document.head.appendChild(linkElt);

document.write(`<h1>${require('../../package.json').name}</h1>`)
document.write(`<img class="logo" src="${getStatic('electron.png')}" />`)
document.write(`<p>env: ${process.env.NODE_ENV}</p>`)
document.write(`<p>static path: ${getStatic('')}</p>`)
