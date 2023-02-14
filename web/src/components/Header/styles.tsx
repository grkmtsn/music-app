import { styled } from "music-app-ui";

export const Wrapper = styled("div", {
  borderBottom: "1px solid #EEEEEE",
  display: "flex",

  svg: {
    opacity: 0.5,
  },
});

export const SearchBar = styled("div", {
  display: "flex",
  alignItems: "center",
  padding: "$4",
  flex: 1,
  borderRight: "1px solid #EEEEEE",
});

export const SearchInput = styled("input", {
  marginLeft: "$3",
  width: "100%",
});

export const Actions = styled("div", {
  display: "flex",
});

export const ItemWrapper = styled("div", {
  padding: "$4 $6",
  display: "flex",
  alignItems: "center",

  "&:first-child": {
    borderRight: "1px solid #EEEEEE",
  },
});

export const Avatar = styled("div", {
  width: "35px",
  height: "35px",
  borderRadius: "$round",
  backgroundColor: "$grey",
  opacity: 0.5,
  marginRight: "$3",
});
