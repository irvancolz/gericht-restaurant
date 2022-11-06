import { ComponentProps, keyframes } from "@stitches/react";
import { styled } from "../../stitches.config";
import { Box } from "../../ui";

export const CarouselContainerStyles = styled(Box, {
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
});

export type CarouselContainerVariants = ComponentProps<
  typeof CarouselContainerStyles
>;

export const CarouselImageStyles = styled(Box, {
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",

  variants: {
    show: {
      true: {
        opacity: "1",
        zIndex: "$1",
        transition: "z-index .1s linear, opacity .5s ease-in-out .2s",
      },
      false: {
        zIndex: "$0",
        opacity: "0",
        transition: "z-index .1s linear, opacity .5s ease-in-out .6s",
      },
    },
  },
  defaultVariants: {
    show: true,
  },
});

export type CarouselImageVariants = ComponentProps<typeof CarouselImageStyles>;
