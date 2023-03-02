import { styled } from "@stitches/react";

export const Container = styled("aside", {
  transition: "all 0.1s ease-out",

  backgroundColor: "$primary",
  height: "calc(100% - 80px)",
  width: "50px",

  position: "absolute",
  left: "16px",
  top: "50%",
  transform: "translateY(-50%)",

  padding: "24px 16px",
  boxSizing: "content-box",
  borderRadius: "30px",
  boxShadow: "$sh1Primary",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  ".signout-button": {
    transition: "all 0.1s ease-out",

    cursor: "pointer",

    borderRadius: "10px",
    width: "80%",
    aspectRatio: "1/1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    svg: {
      height: "24px",
      width: "24px",
      opacity: 0.5,
    },

    "&:hover": {
      backgroundColor: "$primary-detail",

      svg: {
        opacity: 0.8,
      },
    },
  },
});
