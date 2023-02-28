import { styled } from "@stitches/react";

export const Container = styled("div", {
  transition: "all 0.1s ease-in-out",
  cursor: "pointer",
  boxShadow: "$sh2",

  width: "40px",
  height: "40px",
  backgroundColor: "$white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  position: "absolute",
  right: "-20px",
  top: "50%",
  transform: "translateY(-50%)",

  svg: {
    transition: "all 0.1s ease-in-out",
    transform: "scale(.8)",
  },

  "&:hover": {
    backgroundColor: "$white",
    borderRadius: "10px",

    svg: {
      transition: "all 0.1s ease-in-out",
      transform: "scale(1)",
    },
  },
});
