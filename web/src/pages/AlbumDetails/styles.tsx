import { styled } from "music-app-ui";

export const AlbumDetailWrapper = styled("div", {
  display: "flex",
  flex: "1",

  ".img-wrapper": {
    marginRight: "$4",

    img: {
      objectFit: "cover",
      objectPosition: "50% 0",
      width: 225,
      borderRadius: "$2",
    },
  },
});

export const PlaylistWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginTop: "$6",
  color: "$grey",
});

export const Row = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
  marginBottom: "$4",
  color: "$grey",
  fontWeight: "$medium",
  cursor: "pointer",

  "> *": {
    marginRight: "$4",
  },

  ".name": {
    width: "auto",
    flex: 1,
  },
});
