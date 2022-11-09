import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";
import { Box } from "../../ui";

export const SectionWithBgContainer = styled(Box,{
    position: "relative",
    "& > span > img.section_with_bg_img" :{
        zIndex: "-10",
        filter: "brightness(0.6)"
    }
});
export type SectionWithBgContainerVariants = ComponentProps<typeof SectionWithBgContainer>;