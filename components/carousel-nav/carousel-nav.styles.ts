import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";
import { Box, Button } from "../../ui";

export const CarouselNavContainerStyles = styled(Box, {
  display: "flex",
  justify: "center",
});

export type CarouselNavVariants = ComponentProps<
  typeof CarouselNavContainerStyles
>;

export const NavBtnStyles = styled(Button, {
  position: "relative",
  mx: "$four",
  transition: "width .5s ease-in, margin .3s ease-in-out",

  "&::before, &::after": {
    content: "",
    position: "absolute",
    bgCol: "$goldCol1",
    width: "0px",
    height: "2px",
    transition: "width .2s ease-in",
    top: "50%",
    transform: "translateY(50%)",
    overflow: "visible",
  },
  "&::before": {
    left: "calc(-100% - 4px)",
  },
  "&::after": {
    right: "calc(-100% - 4px)",
  },

  variants: {
    active: {
      true: {
        mx: "$2",
        "&::before, &::after": {
          width: "16px",
        },
        "&:first-of-type": {
          mx: "$0",
          "& + button": {
            ml: "$2",
          },
          "&::before": {
            width: "0",
          },
        },
        "&:last-of-type": {
          "&::after": {
            width: "0",
          },
        },
      },
      false: {},
    },
  },
});
