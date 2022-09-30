import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";

interface SectionStylesVariantConfig {
  padV?: string | number;
  padH?: string | number;
  resPadV?: string | number;
  resPadH?: string | number;
}

function createSectionSizeVariants(props: SectionStylesVariantConfig) {
  return {
    padding: `${props.padV} ${props.padH}`,
  };
}

export const SectionStyles = styled("section", {
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  variants: {
    sideSpace: {
      default: {
        padding: "$0",
        "@bp1": {
          padding: "$2",
        },
      },
    },
  },
  defaultVariants: {
    sideSpace: "default",
  },
});

export type SectionVariants = ComponentProps<typeof SectionStyles>;
