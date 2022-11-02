import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";
import {Box} from "../../ui";

export const CarouselContainerStyles = styled(Box,{
    position: "relative",
});

export type CarouselContainerVariants = ComponentProps<typeof CarouselContainerStyles>;

export const CarouselImageStyles = styled("div",{
    position: 'absolute',
    width: "619px",
    height: "688px",
    border: "1px solid #eee",
    transition: "all .5s ease-out",
});

export type CarouselImageVariants = ComponentProps<typeof CarouselImageStyles>;