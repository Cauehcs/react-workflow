import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "100%",

  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "32px",
});

export const IconPage = styled("div", {
  transition: "all 0.1s ease-out",

  position: "relative",
  width: "80%",
  aspectRatio: "1/1",
  borderRadius: "10px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "svg, .pointer": {
    transition: "all 0.1s ease",
  },

  svg: {
    position: "relative",
  },

  variants: {
    active: {
      true: {
        pointerEvents: "none",
        svg: {
          opacity: 1,
        },
        ".pointer": {
          width: "6px",
          height: "6px",

          position: "absolute",
          borderRadius: "50%",
          right: "-6px",

          backgroundColor: "$white",
        },
      },
      false: {
        svg: {
          opacity: 0.5,
        },

        "&:hover": {
          backgroundColor: "$primary-detail",
          cursor: "pointer",

          svg: {
            opacity: 0.8,
          },
        },
      },
    },
  },
});
