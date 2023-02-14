import { styled } from "music-app-ui";

export const CardWrapper = styled("div", {
  marginBottom: "$6",
  cursor: "pointer",

  img: {
    borderRadius: "$2",
    marginBottom: "$2",
  },
});

export const PageWrapper = styled("div", {
  height: "100%",
  display: "flex",
  flexDirection: "column",
});
