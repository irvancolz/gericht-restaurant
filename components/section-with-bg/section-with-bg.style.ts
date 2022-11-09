import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";
import { Box, Section } from "../../ui";

export const SectionWithBgContainer = styled(Box,{
    position: "relative",
});
export type SectionWithBgContainerVariants = ComponentProps<typeof SectionWithBgContainer>;