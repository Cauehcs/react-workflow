import { styled } from "@stitches/react";

export const Container = styled("button", {
  borderRadius: "50%",
  border: "none",
  backgroundColor: "$grey-400",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0.2,

  "&:hover": {
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    opacity: 0.5,
  },

  ".icon_google": {
    width: "90%",
    height: "90%",
  },
});
