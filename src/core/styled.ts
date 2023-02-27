import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100vw",
  height: "100vh",
  paddingLeft: "82px",

  ".loading-component": {
    position: "absolute",
    width: "60px",
    height: "60px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});
