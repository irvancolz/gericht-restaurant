import { ComponentProps } from "@stitches/react";
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
  transition: "all .5s ease-out",
  variants:{
    show:{
      true:{
        opacity: "1",
      },
      false :{
        opacity: "0",
      },
    },
  },
  defaultVariants :{
    show : true,
  }
});

export type CarouselImageVariants = ComponentProps<typeof CarouselImageStyles>;

export const CarouselNavStyles = styled(Box, {
  color: "#eee",
  position: "absolute",
  zIndex: "100",
});

export type CarouselNavVariants = ComponentProps<typeof CarouselNavStyles>;
