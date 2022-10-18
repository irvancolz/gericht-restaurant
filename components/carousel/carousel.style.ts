import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";
import {UI} from "../../ui";
const {Section} = UI;

export const CarouselContainerStyles = styled(Section,{
    border: "1px solid #eee",
    position: "relative",
});

export type CarouselContainerVariants = ComponentProps<typeof CarouselContainerStyles>;