import Image, { ImageProps } from "next/image";
import React, { forwardRef, useContext } from "react";
import { CarouselContextValue } from "./carousel-context";
import { CarouselImageStyles, CarouselImageVariants } from "./carousel.style";

type CarouselImageProps = CarouselImageVariants & ImageProps;

const carousel_image_class = "custom-carousel-image";

export const CarouselImage = forwardRef<HTMLDivElement, CarouselImageProps>(
  ({ className, layout, priority, src, alt, height, width, ...rest }, ref) => {
    const data = useContext(CarouselContextValue);
    function classes() {
      return `${className ? className : ""} ${carousel_image_class}`;
    }

    return (
      <CarouselImageStyles ref={ref} {...rest} className={classes()}>
        <Image
          src={src}
          alt={alt}
          layout={layout}
          height={height}
          width={width}
          priority={priority}
        />
      </CarouselImageStyles>
    );
  }
);

CarouselImage.displayName = "CarouselImage";
