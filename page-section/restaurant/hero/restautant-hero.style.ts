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
  "& .carousel_container": {
    position: "relative",
    width: "619px",
    height: "688px",

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
  },

  "& .hero_content": {
    fBase: "45%",
    "&:first-of-type": {
      fBase: "35%",
    },
  },

  "@bp2" :{
    "& > .hero_content" :{
      fBase: "30%",
    }
  },
});

export const CarouselNavigationStyles = styled(Box, {
  mt: "64px",
});

export const HeroRestaurantWrapperStyles = styled(Box, {
  position: "relative",
});
