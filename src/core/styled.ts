import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100vw",
  height: "100vh",

  ".loading-component": {
    position: "absolute",
    width: "60px",
    height: "60px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  variants: {
    paddingLeft: {
      none: {
        paddingLeft: "0px",
      },
      left: {
        paddingLeft: "82px",
      },
    },
  },
});
