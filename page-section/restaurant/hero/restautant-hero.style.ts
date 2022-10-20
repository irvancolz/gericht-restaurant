import { styled } from "../../../stitches.config";
import { UI } from "../../../ui";
const {Section} = UI;

const flexStyles = {
    display: "flex",
    align: "center",
    justify: "center",
  }

export const NavigationPagesStyles = styled("div",{
    width: "fit-content",
    display: "inline"
  });
  
  export const HeroRestaurantStyles = styled(Section,{
    ...flexStyles,
    width: "1300px",
  });
  
  export const HeroRestaurantWrapperStyles = styled(Section,{
  });