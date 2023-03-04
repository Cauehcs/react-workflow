import { styled } from "@stitches/react";

export const Container = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "calc(50% - 16px)",

  input: {
    height: "48px",
    borderRadius: "10px",
    border: "2px solid $primary-opacity",
    outline: "none",
    transition: "all 0.1s ease-in-out",

    color: "$primary-opacity-focus",
    fontSize: "16px",

    position: "relative",
    width: "100%",
    padding: "0 36px 0 40px",

    "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
      {
        appearance: "none",
      },

    "&:focus": {
      color: "$primary",
      border: "2px solid $primary-opacity-focus",
    },

    "&::placeholder": {
      color: "$primary-opacity-focus",
    },
  },

  ".icon-left, .icon-right": {
    position: "absolute",
    height: "30%",
    aspectRatio: "1/1",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    zIndex: 1,

    svg: {
      width: "100%",
      height: "100%",
      fill: "$primary-opacity",

      transition: "all 0.1s ease-in-out",
    },
  },

  ".icon-left": {
    left: "16px",
  },

  ".icon-right": {
    right: "16px",
    cursor: "pointer",

    svg: {
      transform: "rotate(45deg)",
    },
  },

  ".onFocus": {
    svg: {
      fill: "$primary-opacity-focus",
    },
  },
});
