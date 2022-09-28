import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";

export const HeadingComp = styled("h1", {variants: {
  size: {
    sm: {
      fontSize: "$sm",
    },
    md: {
      fontSize: "$md",
    },
    lg: {
      fontSize: "$lg",
    },
    xl: {
      fontSize: "$xl",
    },
  },
  // adjust font color
  color: {
    gold: {
      color: "$goldCol1",
    },
    normal: {
      color: "$textCol",
    },
    fade: {
      color: "$grayCol1",
    },
  },
  // adjust font variant
  family: {
    cormorant: {
      fontFamily: "$cormorant",
    },
    open: {
      fontFamily: "$openSans",
    },
    source: {
      fontFamily: "$sourceSans",
    },
    lato: {
      fontFamily: "$lato",
    },
  },
},});

export type HeadingCompConfig = ComponentProps<typeof HeadingComp>
