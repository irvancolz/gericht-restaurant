import React, { ElementType, forwardRef, ReactNode } from "react";
import { TitleStyles, TitleVariants } from "./artice-header.style";

interface ArticleTitleConfig extends TitleVariants {
  className?: string;
  as?: ElementType;
  children?: ReactNode;
}

const title_class = "custom_article_title";

const ArticleTitle = forwardRef<
  HTMLParagraphElement,
  ArticleTitleConfig
>(({ className, children, ...rest }, ref) => {
  function classes() {
    return `${className ? className : ""} ${title_class}`;
  }
  return (
    <TitleStyles ref={ref} className={classes()} {...rest}>
      {children}
    </TitleStyles>
  );
});

ArticleTitle.displayName = "ArticleTitle";
export default ArticleTitle;
