import { createStitches } from "@stitches/react";
import { colors } from "./colors";

export const shadows = createStitches({
  theme: {
    shadows: {
      sh1: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      sh2: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
      sh1Primary: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
    },
  },
});
