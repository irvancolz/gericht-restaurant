import { styled } from "../stitches.config";
import { UI } from "../ui";
const { Section } = UI;

export const MainContainerStyles = styled(Section, {
  position: "relative",
});

export const ContainerStyles = styled(Section, {
  height: "828px",
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
