import { globalCss } from "./stitches.config";

export const globalResetStyles = globalCss({
  "*, ::before, ::after": {
    boxSizing: "border-box",
    borderWidth: "0",
    borderStyle: "solid",
  },

  "*": {
    margin: 0,
  },

  "html, body": {
    height: "100%",
  },

  html: {
    fontFamily: "$default",
  },

  "h1, h2, h3, h4, h5, h6": {
    fontSize: "inherit",
    fontWeight: "inherit",
  },

  "p, h1, h2, h3, h4, h5, h6": {
    overflowWrap: "break-word",
  },

  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },

  "button, input, textarea, select, optgroup": {
    fontFamily: "inherit",
    fontSize: "100%",
  },

  "ol, ul": {
    margin: 0,
    padding: 0,
  },

  a: {
    backgroundColor: "transparent",
    color: "inherit",
    textDecoration: "inherit",
  },
});
