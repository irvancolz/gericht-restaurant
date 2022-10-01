import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";

export const InputStyles = styled("input", {
  bgCol: "$clear",
  lineCol: "$clear",
  border: "1px solid",
  outline: "none",
  color: "$textCol",
  width: "100%",
  maxWidth: "635px",
  fontSize: "$sm",
  fontFamily: "$cormorant",
  px: "$2",
  py: "$2",

  "&:focus": {
    lineCol: "$textCol",
  },

  "&:invalid": {
    lineCol: "rgb(197, 34, 34)",
  },

  "&:placeholder-shown": {
    lineCol: "$textCol",
  },
});

export type InputVariants = ComponentProps<typeof InputStyles>;
