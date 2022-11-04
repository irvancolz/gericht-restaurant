import { StaticImageData } from "next/image";
import React, { forwardRef, ReactNode, useContext, useEffect } from "react";
import {
  CarouselContextValue,
  carouselContextValueConfig,
} from "./carousel-context";
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
>(({ children, className, images, context, ...rest }, ref) => {
  function classes() {
    return `${className ? className : ""} ${carousel_custom_class}`;
  }

  function selectContext() {
    if (context) {
      return context
    }else{
      return CarouselContextValue
    }
  }
  selectContext();

  const { navigation, setNavigation, setMaxSlide } =
  useContext(selectContext());
  useEffect(() => {
    const timer = setTimeout(() => {
      if (navigation !== undefined && setNavigation !== undefined) {
        if (navigation >= images.length - 1) {
          setNavigation(0);
        } else {
          setNavigation?.(navigation + 1);
        }
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [navigation, images.length, setNavigation]);

  useEffect(() => {
    if (setMaxSlide !== undefined) {
      setMaxSlide(images.length);
    }
  });

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
