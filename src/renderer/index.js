import getStatic from "./utils/getStatic";

let cssPath = getStatic("theme.css");

let linkElt = document.createElement("link");
linkElt.setAttribute("rel", "stylesheet");
linkElt.setAttribute("type", "text/css");
linkElt.setAttribute("href", cssPath);
document.head.appendChild(linkElt);

document.write(`<h1>${require('../../package.json').name}</h1>`)
document.write(`<div>css path: ${cssPath}</div>`)