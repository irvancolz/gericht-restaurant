import React, { ElementType, forwardRef, ReactNode } from "react";
import { HeaderStyles, HeaderVariants } from "./artice-header.style";
import spoon from "../../public/assets/global/spoon-logo.png";
import Image from "next/image";

interface ArticleHeadingConfig extends HeaderVariants {
  clasName?: string;
  imageClass?: string;
  as?: ElementType;
  children?: ReactNode;
}

const heading_class = "custom_article_heading";

export const ArticleHeading = forwardRef<
  HTMLHeadingElement,
  ArticleHeadingConfig
>(({ className, imageClass, children, fCol, size, ...rest }, ref) => {
  function classes() {
    return `${className ? className : ""} ${heading_class}`;
  }
  return (
    <>
      <HeaderStyles
        fcol={fCol}
        size={size}
        ref={ref}
        className={classes()}
        {...rest}
      >
        {children}
      </HeaderStyles>
      <Image
        className={imageClass}
        src={spoon}
        alt="spoon-logo"
        layout="fixed"
      />
    </>
  );
});

ArticleHeading.displayName = "ArticleHeading";
