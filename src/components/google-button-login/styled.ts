import { styled } from "@stitches/react";

export const Container = styled("button", {
  borderRadius: "50%",
  border: "none",
  backgroundColor: "$grey",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0.2,

  transition: "all 0.2s ease-in-out",

  "&:hover": {
    cursor: "pointer",
    opacity: 0.5,
  },

  ".icon_google": {
    width: "90%",
    height: "90%",
  },
});
