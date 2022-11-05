import { ComponentProps, keyframes } from "@stitches/react";
import { styled } from "../../stitches.config";
import { Box } from "../../ui";

export const CarouselContainerStyles = styled(Box, {
  position: "relative",
  height: "688px",
  width: "619px",
  "&::before, &::after": {
    content: "",
    position: "absolute",
    bgCol: "$goldCol1",
    height: "435px",
    width: "435px",
    zIndex: "-1",
  },
  "&::before": {
    top: "-24px",
    right: "-24px",
  },
  "&::after": {
    bottom: "-24px",
    left: "-24px",
  },
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
