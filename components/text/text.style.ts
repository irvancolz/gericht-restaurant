import { styled } from "../../stitches.config";
import { ComponentProps } from "@stitches/react";

export const TextStyles = styled("p", {
  variants: {
    // adjust font size
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
    fCol: {
      gold: {
        color: "$goldCol1",
      },
      normal: {
        color: "$textCol",
      },
      fade: {
        color: "$grayCol1",
      },
      dark: {
        color: "$darkCol1",
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
    weight: {
      thin: {
        fontWeight: "$thin",
      },
      light: {
        fontWeight: "$light",
      },
      normal: {
        fontWeight: "$normal",
      },
      medium: {
        fontWeight: "$medium",
      },
      bold: {
        fontWeight: "$bold",
      },
      xBold: {
        fontWeight: "$xBold",
      },
    },
  },
  defaultVariants: {
    family: "cormorant",
    size: "md",
    fCol: "normal",
    weight: "normal",
  },
});
// use for components parameter
export type TextStylesVariant = ComponentProps<typeof TextStyles>;
