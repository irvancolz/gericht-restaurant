import React, { forwardRef, useContext } from "react";
import { Box, Text } from "../../ui";
import { carouselContextValueConfig } from "../carousel/carousel-context";
import {
  CarouselNavContainerStyles,
  CarouselNavVariants,
  NavBtnStyles,
} from "./carousel-nav.styles";

interface CarouselNavConfig extends CarouselNavVariants {
  className?: string;
  context: carouselContextValueConfig;
}

const carousel_nav_class = "custom_carousel_nav_c";

export const CarouselNav = forwardRef<HTMLDivElement, CarouselNavConfig>(
  ({ className, context, ...rest }, ref) => {
    function classes() {
      return `${className ? className : ""} ${carousel_nav_class}`;
    }
    if (!context) {
      console.error(
        "please ony use carousel nav compnents inside a carousel config"
      );
    }
    const { navigation, setNavigation, maxSlide } = useContext(context);
    const NavBtn = [];
    if (maxSlide) {
      for (let i = 0; i < maxSlide; i++) {
        NavBtn.push(
          <NavBtnStyles
            key={i}
            variant="ternary"
            padding="none"
            title="change images"
            active={i == navigation ? true : false}
            onClick={() => {
              if (setNavigation !== undefined) {
                setNavigation(i);
              }
            }}
          >
            <Text size="sm" weight="medium" fCol="fadeGold">{`0${i + 1}`}</Text>
          </NavBtnStyles>
        );
      }
    }
    return (
      <CarouselNavContainerStyles ref={ref} className={classes()} {...rest}>
        <Box>{NavBtn}</Box>
      </CarouselNavContainerStyles>
    );
  }
);

CarouselNav.displayName = "CarouselNav";
