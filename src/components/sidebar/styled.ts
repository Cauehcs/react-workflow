import { styled } from "@stitches/react";

export const Container = styled("aside", {
  position: "absolute",
  left: "0",
  transition: "all 0.1s ease-out",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "16px",
  boxSizing: "content-box",
  justifyContent: "space-between",

  backgroundColor: "$blue-400",

  height: "calc(100% - 32px)",
  width: "50px",

  ".page-content": {
    display: "flex",
    flexDirection: "column",
    flex: "1",
  },

  variants: {
    expanded: {
      true: {
        width: "200px",
      },
      false: {
        transitionDelay: ".5s",
      },
    },
  },
});
