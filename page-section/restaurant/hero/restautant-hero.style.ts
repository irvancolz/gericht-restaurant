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
  align: "center",
  justify: "space-between",
  "& .hero_content": {
    "&:first-of-type": {
      fBase: "35%",
    },
  },
});

export const HeroRestaurantWrapperStyles = styled(Box, {
  position: "relative",

});
