import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";
import {UI} from "../../ui";
const {Section} = UI;

export const CarouselContainerStyles = styled(Section,{
    position: "relative",
});

export type CarouselContainerVariants = ComponentProps<typeof CarouselContainerStyles>;

export const CarouselImageStyles = styled("div",{
    variants:{
        layout:{
            fill:{
                position: "absolute",
                top: 0,
                left:0,
                bottom: 0,
                right: 0,
            }
        }
    }
});

export type CarouselImageVariants = ComponentProps<typeof CarouselImageStyles>;