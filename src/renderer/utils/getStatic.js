import path from "path";
import * as url from "url";

const isDevelopment = process.env.NODE_ENV !== "production";

// see https://github.com/electron-userland/electron-webpack/issues/241#issuecomment-582920906
export default function getStatic(relativePath = "") {
  if (isDevelopment) {
    return url.resolve(window.location.origin, relativePath);
  }
  return path.resolve(__static, relativePath);
}
