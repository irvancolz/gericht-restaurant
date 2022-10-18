import React, { ReactNode } from "react";
import { CarouselContext } from "./carousel-context";
import {
  CarouselContainerStyles,
  CarouselContainerVariants,
} from "./carousel.style";

interface carouselContainerConfig extends CarouselContainerVariants {
  children?: ReactNode;
}

const carousel_custom_class = "custom-carousel-container";

export function carouselContainer({
  children,
  className,
  ...rest
}: carouselContainerConfig) {
  function classes() {
    return `${className ? className : ""} ${carousel_custom_class}`;
  }
  return (
    <CarouselContext>
      <CarouselContainerStyles className={classes()} {...rest}>
        {children}
      </CarouselContainerStyles>
    </CarouselContext>
  );
}
