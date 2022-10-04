import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";

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

export const HeadingComp = styled("h1", {
  variants: {
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
    size: "lg",
    fCol: "gold",
    weight: "normal",
  },
});

export type HeadingCompConfig = ComponentProps<typeof HeadingComp>;
