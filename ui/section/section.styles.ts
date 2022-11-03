import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";

interface SectionStylesVariantConfig {
  padV?: string | number;
  padH?: string | number;
  resPadV?: string | number;
  resPadH?: string | number;
}

export const SectionStyles = styled("section", {
  position: "relative",
  maxWidth: "1920px",
  width: "100%",
  mx: "auto",
  variants: {
    paddingSide: {
      sm: {
        px: "$7",
        "@bp3": {
          px: " $4",
        },
        "@bp2": {
          px: "$2",
        },
        "@bp1": {
          px: "$1",
        },
      },
      lg: {
        px: "$10",
        "@bp3": {
          px: " $4",
        },
        "@bp2": {
          px: "$2",
        },
        "@bp1": {
          px: "$1",
        },
      },
      none: {
        px: "0px",
        "@bp3": {
          px: "0px",
        },
        "@bp2": {
          px: "0px",
        },
        "@bp1": {
          px: "0px",
        },
      },
    },
  },
  defaultVariants: {
    paddingSide: "none",
  },
});

export type SectionVariants = ComponentProps<typeof SectionStyles>;
