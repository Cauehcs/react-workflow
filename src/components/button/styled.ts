import { styled } from "@stitches/react";

export const Container = styled("button", {
  backgroundColor: "$primary",
  color: "$white",

  padding: "8px 16px",
  borderRadius: "16px",
  border: "none",
  boxShadow: "$sh2",

  fontSize: "16px",
  fontWeight: "600",

  transition: "all 0.2s ease",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  flexDirection: "row",

  svg: {
    width: "16px",
    height: "16px",
  },

  "&:hover": {
    backgroundColor: "$primary-hover",
    cursor: "pointer",
  },
});
