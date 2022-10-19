import Image, { ImageProps } from "next/image";
import React, { forwardRef } from "react";
import { CarouselImageStyles, CarouselImageVariants } from "./carousel.style";
type CarouselImageProps = CarouselImageVariants & ImageProps;

const carousel_image_class = "custom-carousel-image";

const CarouselImage = forwardRef<HTMLDivElement, CarouselImageProps>(
  ({ className, layout, src, alt, height, width, ...rest }, ref) => {

    function classes(){
      return`${className ? className : ''} ${carousel_image_class}`
    }

    return (
      <CarouselImageStyles ref={ref} {...rest} className={classes()}>
        <Image
          src={src}
          alt={alt}
          layout={layout}
          height={height}
          width={width}
        />
      </CarouselImageStyles>
    );
  }
);

CarouselImage.displayName = "CarouselImage";
export default CarouselImage;
