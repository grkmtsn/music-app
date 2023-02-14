import { styled } from "music-app-ui";

export const Wrapper = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

export const Card = styled("div", {
  width: 375,
  padding: "$6",
  backgroundColor: "$red",
  color: "$white",
  borderRadius: "$3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  boxShadow: "rgb(255 56 80 / 94%) 0px 2px 30px;",
});

export const InputWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",

  label: {
    fontSize: "$md",
  },

  input: {
    marginBottom: "$4",
    padding: "$2",
    borderRadius: "$2",
    backgroundColor: "transparent",
    border: "1px solid white",
    color: "$white",
  },

  button: {
    alignSelf: "flex-end",
    backgroundColor: "$white",
    borderRadius: "3px",
    padding: "$2 $5",
    cursor: "pointer",
    transition: "all 0.3s ease",

    "&:hover, &:active, &:focus": {
      boxShadow: "0px 2px 8px #BC1428",
    },
  },
});
