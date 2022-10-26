import { styled } from "../../stitches.config";
import { ComponentProps } from "@stitches/react";

interface fontSizeConfig {
  initial?: string;
  responsive?: string;
}

function CreateFontSizeVariant(value: fontSizeConfig) {
  return {
    fontSize: value.initial,
    "@bp2": {
      fontSize: value.responsive,
    },
    "@bp1": {
      fontSize: value.responsive,
    },
  };
}

export const TextStyles = styled("p", {
  variants: {
    // adjust font size
    size: {
      sm: CreateFontSizeVariant({ initial: "$1", responsive: "$10" }),
      md: CreateFontSizeVariant({ initial: "$2", responsive: "$20" }),
      nr: CreateFontSizeVariant({ initial: "$3", responsive: "$30" }),
      lg: CreateFontSizeVariant({ initial: "$4", responsive: "$40" }),
      xl: CreateFontSizeVariant({ initial: "$5", responsive: "$50" }),
      xxl: CreateFontSizeVariant({ initial: "$6", responsive: "$60" }),
    },
    // adjust font color
    fCol: {
      gold: {
        color: "$goldCol1",
      },
      normal: {
        color: "$textCol1",
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
      poppins:{
        fontFamily: "$poppins",
      }
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
    align: {
      start: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      end: {
        textAlign: "right",
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
