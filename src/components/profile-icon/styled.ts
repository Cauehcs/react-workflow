import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
  gap: "8px",

  img: {
    width: "50px",
    height: "50px",
    padding: "2px",
    backgroundColor: "white",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center",

    "&:hover": {
      cursor: "pointer",
      filter: "grayscale(100%)",
    },
  },

  "#profile-info": {
    width: "calc(100% - 58px)",

    p: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      color: "$white",
      fontSize: "12px",
      fontWeight: "500",
    },

    "&& p:first-of-type": {
      marginBottom: "4px",
      fontSize: "16px",
      fontWeight: "700",
    },
  },
});
