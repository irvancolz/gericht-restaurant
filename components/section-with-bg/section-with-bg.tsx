import Image, { StaticImageData } from "next/image";
import React, { forwardRef, ReactNode } from "react";
import {
  SectionWithBgContainer,
  SectionWithBgContainerVariants,
} from "./section-with-bg.style";

interface SectionWithBgConfig extends SectionWithBgContainerVariants {
  children?: ReactNode;
  className?: string;
  imageSrc: StaticImageData;
}

const section_with_bg_class = "section-with-bg";

export const SectionWithBg = forwardRef<HTMLDivElement, SectionWithBgConfig>(
  ({ children, className, imageSrc, ...rest }, ref) => {
    function classes() {
      return `${className ? className : ""} ${section_with_bg_class}`;
    }
    return (
      <SectionWithBgContainer ref={ref} className={classes()} {...rest}>
        {children}
        <Image src={imageSrc} className="section_with_bg_img" alt="background" layout="fill" priority />
      </SectionWithBgContainer>
    );
  }
);
SectionWithBg.displayName = "SectionWithBg";
