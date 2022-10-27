import { styled } from "../../../stitches.config";
import { UI } from "../../../ui";
const {Section, Box} = UI;

const flexStyles = {
    display: "flex",
    align: "center",
    justify: "center",
  }

export const NavigationPagesStyles = styled(Box,{
    width: "fit-content",
    display: "inline"
  });
  
  export const HeroRestaurantStyles = styled(Box,{
    ...flexStyles,
  });
  
  export const HeroRestaurantWrapperStyles = styled(Box,{
  });