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
  my: "auto",
  variants: {
    paddingSide: {
      sm: {
        py: "$7",
        "@bp3": {
          py: " $4",
        },
        "@bp2": {
          py: "$2",
        },
        "@bp1": {
          py: "$1",
        },
      },
      lg: {
        py: "$10",
        "@bp3": {
          py: " $4",
        },
        "@bp2": {
          py: "$2",
        },
        "@bp1": {
          py: "$1",
        },
      },
      none: {
        py: "0px",
        "@bp3": {
          py: "0px",
        },
        "@bp2": {
          py: "0px",
        },
        "@bp1": {
          py: "0px",
        },
      },
    },
  },
  defaultVariants: {
    paddingSide: "none",
  },
});

export type SectionVariants = ComponentProps<typeof SectionStyles>;
