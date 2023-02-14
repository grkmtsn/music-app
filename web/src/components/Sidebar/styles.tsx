import { styled } from "music-app-ui";

export const Wrapper = styled("div", {
  paddingInline: "$5",
  paddingBlock: "$3",
  borderRight: "1px solid #EEEEEE",
  height: "100%",
});

export const ImageWrapper = styled("div", {
  marginBottom: "$3",
});

export const MenuItem = styled("li", {
  display: "flex",
  alignItems: "center",
  marginBottom: "$5",
  color: "$black",
  opacity: 0.5,
  transition: "opacity 0.3s ease",

  "&:hover": {
    opacity: 1,
  },
});

export const MenuWrapper = styled("ul", {
  paddingTop: "$3",
  listStyle: "none",

  [`.active ${MenuItem}`]: {
    color: "$purple",
    opacity: 1,
  },
});

export const IconWrapper = styled("div", {
  width: "15px",
  marginRight: "$3",
});
