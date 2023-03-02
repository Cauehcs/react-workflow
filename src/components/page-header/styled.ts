import { styled } from "@stitches/react";
export const Container = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",

  "h1, h3": {
    color: "$white",
  },

  h1: {
    fontSize: "24px",
    fontWeight: "700",
  },

  h3: {
    fontSize: "16px",
    fontWeight: "400",
  },

  ".title-group": {
    display: "flex",
    alignItems: "left",
    flexDirection: "column",
    gap: "-8px",

    ".focus": {
      color: "$water",
    },
  },

  ".action-profile": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",

    ".pointer": {
      width: "5px",
      height: "5px",
      aspectRatio: "1/1",
      borderRadius: "100%",
      backgroundColor: "$primary",
    },
  },
});
