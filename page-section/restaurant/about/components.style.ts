import { styled } from "../../../stitches.config";
import { Box, Section, Wrapper } from "../../../ui";

export const HeroAboutContainerStyles = styled(Box, {
  display: "flex",
  gap: "85px",
  py: "$8",
  justify: "center",
  align: "center",
});

export const AboutRestaurantsStyles = styled(Section, {
  variants: {
    content: {
      right: {
        display: "grid",
        placeItems: "end",
      },
    },
  },
});

export const AboutBgStyles = styled(Wrapper, {
  position: "absolute",
  zIndex: "-1",
});
