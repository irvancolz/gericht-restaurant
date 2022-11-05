import { styled } from "../../../stitches.config";
import { Box } from "../../../ui";

const flexStyles = {
  display: "flex",
  align: "center",
  justify: "center",
};

export const NavigationPagesStyles = styled(Box, {
  ...flexStyles,
  position: "absolute",
  left: "0",
  height: "100%",

  "& > div": {
    transform: "rotate(270deg)",
  },
});

export const HeroRestaurantStyles = styled(Box, {
  display: "flex",
  justify: "space-between",
  alignItems: "center",
  fWrap: "wrap",

  "@bp3": {
    justify: "center",
    align: "center",
  },

  "& .hero_content": {
    fBase: "45%",
    "&:first-of-type": {
      fBase: "35%",
    },
  },
});

export const CarouselNavigationStyles = styled(Box, {
  mt: "64px",
});

export const HeroRestaurantWrapperStyles = styled(Box, {
  position: "relative",
});
