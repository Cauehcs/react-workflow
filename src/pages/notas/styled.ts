import { styled } from "@stitches/react";

export const Container = styled("main", {
  backgroundColor: "$background",
  height: "100vh",
  padding: "40px",

  ".input-group": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "32px",
    floodColor: "$primary",

    select: {
      height: "48px",
      borderRadius: "10px",
      border: "2px solid $primary-opacity",
      outline: "none",
      transition: "all 0.1s ease-in-out",

      color: "$primary-opacity-focus",
      fontSize: "16px",

      "&:focus": {
        color: "$primary",
        border: "2px solid $primary-opacity-focus",
      },

      "&::placeholder": {
        color: "$primary-opacity-focus",
      },
    },

    ".onFocus": {
      svg: {
        fill: "$primary-opacity-focus",
      },
    },
  },

  input: {
    position: "relative",
    width: "100%",
    padding: "0 36px 0 40px",

    "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
      {
        appearance: "none",
      },
  },

  select: {
    width: "calc(24% - 16px)",
    appearance: "none",
    padding: "0 16px",
  },

  ".container-filter-direction": {
    padding: "8px",
    cursor: "pointer",
    height: "48px",
    borderRadius: "10px",
    aspectRatio: "1/1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.1s ease-in-out",

    "&:hover": {
      backgroundColor: "$primary-detail-opacity",
    },

    svg: {
      width: "24px",
      height: "24px",
      transform: "rotate(90deg)",
    },
  },
});
