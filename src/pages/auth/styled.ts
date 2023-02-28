import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100vw",
  height: "100vh",
  backgroundColor: "$background",
  display: "flex",
  flexDirection: "row",

  ".left-container": {
    backgroundColor: "$blue-400",
    width: "40vw",
    height: "100vh",
    padding: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    "h1, p": {
      color: "$white",
    },

    h1: {
      width: "100%",
      marginBottom: "16px",
      fontSize: "clamp(24px, 5vw, 36px)",
      textAlign: "left",
    },

    p: {
      width: "100%",
      marginTop: "8px",
      fontSize: "clamp(8px, 5vw, 14px)",
      textAlign: "left",
    },

    a: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "24px",
      svg: {
        width: "24px",
        height: "24px",
        transition: "all 0.2s ease-in-out",

        "&:hover": {
          opacity: 0.8,
        },
      },
    },
  },

  ".right-container": {
    width: "60vw",
    height: "100vh",
    padding: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    button: {
      width: "48px",
      height: "48px",
      marginTop: "24px",
    },
  },
});
