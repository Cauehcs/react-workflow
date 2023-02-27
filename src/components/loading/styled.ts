import { keyframes, styled } from "@stitches/react";

const animationElement = keyframes({
  "0%": {},
  "50%": {
    transform: "rotate(180deg) scale(2)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const LoadingComponent = styled("div", {
  svg: {
    width: "100%",
    height: "100%",
    animation: `${animationElement} 1.5s ease infinite`,
  },
});
