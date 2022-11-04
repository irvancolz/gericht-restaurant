import { StaticImageData } from "next/image";
import React, { forwardRef, ReactNode, useContext, useEffect } from "react";
import { CarouselContextValue, carouselContextValueConfig } from "./carousel-context";
import { CarouselImage } from "./carousel-img";
import {
  CarouselContainerStyles,
  CarouselContainerVariants,
} from "./carousel.style";

interface carouselContainerConfig extends CarouselContainerVariants {
  children?: ReactNode;
  images: Array<StaticImageData>;
  className?: string;
  context?: carouselContextValueConfig;
}

const carousel_custom_class = "custom-carousel-container";

export const CarouselContainer = forwardRef<
  HTMLDivElement,
  carouselContainerConfig
>(({ children, className, images, ...rest }, ref) => {
  function classes() {
    return `${className ? className : ""} ${carousel_custom_class}`;
  }

  const { navigation, setNavigation } = useContext(CarouselContextValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (navigation !== undefined && setNavigation !== undefined) {
        console.log(navigation);
        if (navigation >= images.length - 1) {
          setNavigation(0);
        } else {
          setNavigation?.(navigation + 1);
        }
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [navigation, images.length, setNavigation]);
  return (
    <CarouselContainerStyles ref={ref} className={classes()} {...rest}>
      {images.map((img, i) => {
        return (
          <CarouselImage
            key={i}
            src={img}
            show={i == navigation ? true : false}
          />
        );
      })}
    </CarouselContainerStyles>
  );
});

CarouselContainer.displayName = "CarouselContainer";
