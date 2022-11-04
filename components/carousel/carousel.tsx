import React, { forwardRef } from "react";
import { StaticImageData } from "next/image";
import { CarouselContainer } from "./carousel-container";
import {
  carouselContextValueConfig,
  CarouselContext,
} from "./carousel-context";

interface CarouselConfig {
  images: Array<StaticImageData>;
  className?: string;
  context?: carouselContextValueConfig;
}

export const Carousel = forwardRef<HTMLDivElement, CarouselConfig>(
  (props, ref) => {
    return (
      <CarouselContext>
        <CarouselContainer ref={ref} {...props} />
      </CarouselContext>
    );
  }
);

Carousel.displayName = "carousel";
