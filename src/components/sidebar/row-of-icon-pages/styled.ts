import { keyframes, styled } from "@stitches/react";

const exitButton = keyframes({
  "0%": {},
  "100%": {
    opacity: 0,
    transform: "translateX(-100px)",
  },
});

const enterButton = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateX(-100px)",
  },
  "100%": {
    opacity: 1,
    position: "absolute",
    transform: "translateX(0px)",
  },
});

export const Container = styled("div", {
  width: "100%",
  height: "24px",

  position: "relative",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  alignContent: "center",
});

export const IconPage = styled("div", {
  height: "24px",
  width: "24px",

  svg: {
    transition: "all 0.1s ease-in-out",
  },

  variants: {
    expanded: {
      true: {},
      false: {
        animation: `${exitButton} 0.2s ease-in-out forwards`,
      },
    },
    active: {
      true: {
        pointerEvents: "none",
        svg: {
          opacity: 1,
        },
      },
      false: {
        svg: {
          opacity: 0.5,

          "&:hover": {
            cursor: "pointer",
            opacity: 0.8,
          },
        },
      },
    },
  },

  compoundVariants: [
    {
      active: "false",
      expanded: "false",
      css: {},
    },
    {
      active: "true",
      expanded: "false",
      css: {
        animation: `${exitButton} 0.2s ease-in-out forwards, ${enterButton} 0.2s ease-in-out forwards`,
      },
    },
  ],
});
