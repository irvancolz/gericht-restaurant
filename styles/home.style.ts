import { styled } from "../stitches.config";
import { Section, Box } from "../ui";

export const MainContainerStyles = styled(Section, {
  position: "relative",
});

export const PagesContentStyles = styled(Box, {
  transition: "all 1s ease-in-out",
  width: "100%",
  variants: {
    isActive: {
      true: {
        opacity: 1,
        pointerEvents: "auto",
        visibility: "visible",
      },
      false: {
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 0,
        pointerEvents: "none",
        visibility: "hidden",
      },
    },
  },
});
