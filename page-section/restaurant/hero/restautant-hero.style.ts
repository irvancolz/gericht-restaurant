import { styled } from "../../../stitches.config";
import { Box } from "../../../ui";

const flexStyles = {
  display: "flex",
  align: "center",
  justify: "center",
};

export const NavigationPagesStyles = styled(Box, {
  width: "fit-content",
  display: "inline",
});

export const HeroRestaurantStyles = styled(Box, {
  ...flexStyles,
});

export const HeroRestaurantWrapperStyles = styled(Box, {});
