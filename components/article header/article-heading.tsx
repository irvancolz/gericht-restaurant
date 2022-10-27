import React, { ElementType, forwardRef, ReactNode } from "react";
import { HeaderStyles, HeaderVariants } from "./artice-header.style";

interface ArticleHeadingConfig extends HeaderVariants {
  clasName?: string;
  as?: ElementType;
  children?: ReactNode;
}

const heading_class = "custom_article_heading";

const ArticleHeading = forwardRef<HTMLHeadingElement, ArticleHeadingConfig>(
  ({ className, children, ...rest }, ref) => {
    function classes() {
      return `${className ? className : ""} ${heading_class}`;
    }
    return (
      <HeaderStyles ref={ref} className={classes()} {...rest}>
        {children}
      </HeaderStyles>
    );
  }
);

ArticleHeading.displayName = "ArticleHeading";
export default ArticleHeading;
