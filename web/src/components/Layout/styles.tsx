import { styled } from "music-app-ui";

export const PageLayout = styled("div", {
  display: "grid",
  gridTemplateAreas: `
    'sidebar header'
    'sidebar main '
    'footer footer'
  `,
  gridTemplateRows: "65px 1fr 60px",
  gridTemplateColumns: "170px 1fr",

  gap: 0,
  padding: 0,
  height: "100vh",

  ".sidebar": {
    gridArea: "sidebar",
  },

  ".header": {
    gridArea: "header",
  },

  ".main": {
    gridArea: "main",
    padding: "$5",
    background:
      "linear-gradient(180deg, rgba(244, 249, 255, 0.0001) 0%, #F4F9FF 70%)",
  },

  ".footer": {
    gridArea: "footer",
  },
});

export const SpinnerWrapper = styled("div", {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
