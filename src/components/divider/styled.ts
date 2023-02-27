import { styled } from "@stitches/react";

export const Divider = styled("div", {
  width: "100%",
  height: "1px",
  margin: "16px 0",

  variants: {
    color: {
      white: {
        backgroundColor: "$white",
      },
    },
  },
});
