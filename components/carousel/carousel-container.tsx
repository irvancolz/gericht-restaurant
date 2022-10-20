import React, { Children, ReactNode } from "react";
import { CarouselContext } from "./carousel-context";
import { CarouselNavigation } from "./carousel-nav";
import {
  CarouselContainerStyles,
  CarouselContainerVariants,
} from "./carousel.style";

interface carouselContainerConfig extends CarouselContainerVariants {
  children?: ReactNode;
  navigation?: boolean;
}

const carousel_custom_class = "custom-carousel-container";

export function CarouselContainer({
  children,
  className,
  ...rest
}: carouselContainerConfig) {
  // console.log(Children.count(children))
  function classes() {
    return `${className ? className : ""} ${carousel_custom_class}`;
  }
  return (
    <CarouselContext>
      <CarouselContainerStyles className={classes()} {...rest}>
        {children}
        <CarouselNavigation />
      </CarouselContainerStyles>
    </CarouselContext>
  );
}
