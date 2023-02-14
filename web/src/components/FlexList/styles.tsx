import { styled } from "music-app-ui";

export const Wrapper = styled("div", {
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "auto",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "> *": {
    marginRight: "$4",
    flex: "0 0 auto",
  },
});
