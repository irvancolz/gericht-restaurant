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
      sm: CreateFontSizeVariant({ initial: "$sm", responsive: "$smr" }),
      md: CreateFontSizeVariant({ initial: "$md", responsive: "$mdr" }),
      nr: CreateFontSizeVariant({ initial: "$nr", responsive: "$nrr" }),
      lg: CreateFontSizeVariant({ initial: "$lg", responsive: "$lgr" }),
      xl: CreateFontSizeVariant({ initial: "$xl", responsive: "$xlr" }),
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
