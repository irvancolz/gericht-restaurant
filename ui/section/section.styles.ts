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
  variants:{
    paddingSide :{
      true: {
        py: "$7",
        "@bp3" :{
          py: " $4",
        },
        "@bp2" :{
          py: '$2'
        },
        "@bp1" :{
          py: '$1'
        },
      },
      false: {
        py: "0px",
        "@bp3" :{
          py: "0px",
        },"@bp2" :{
          py: '0px'
        },
        "@bp1" :{
          py: '0px'
        },
      }
    }
  },
  defaultVariants :{
    paddingSide : false,
  },
});

export type SectionVariants = ComponentProps<typeof SectionStyles>;
