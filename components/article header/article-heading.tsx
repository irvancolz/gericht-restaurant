import React, { ElementType, forwardRef, ReactNode } from "react";
import { HeaderStyles, HeaderVariants } from "./artice-header.style";
import spoon from "../../public/assets/global/spoon-logo.png";
import Image from "next/image";

interface ArticleHeadingConfig extends HeaderVariants {
  clasName?: string;
  as?: ElementType;
  children?: ReactNode;
}

const heading_class = "custom_article_heading";

export const ArticleHeading = forwardRef<
  HTMLHeadingElement,
  ArticleHeadingConfig
>(({ className, children, fCol, size, ...rest }, ref) => {
  function classes() {
    return `${className ? className : ""} ${heading_class}`;
  }
  return (
    <>
      <HeaderStyles
        ref={ref}
        className={classes()}
        fcol={fCol}
        size={size}
        {...rest}
      >
        {children}
      </HeaderStyles>
      <Image src={spoon} alt="spoon-logo" layout="fixed" />
    </>
  );
});

ArticleHeading.displayName = "ArticleHeading";
