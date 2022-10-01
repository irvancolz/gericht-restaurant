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
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "1300px",
  width: "100%",
  my: "auto",
});

export type SectionVariants = ComponentProps<typeof SectionStyles>;
