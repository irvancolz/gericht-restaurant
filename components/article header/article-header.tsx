import React, { ElementType, forwardRef, ReactNode } from "react";
import { ContainerStyles, ContainerVariants } from "./artice-header.style";

interface ArticleHeaderConfig extends ContainerVariants {
  children?: ReactNode;
  as?: ElementType;
  clasName?: string;
}

const article_classes = "custom_article_header";

export const ArticleHeader = forwardRef<HTMLElement, ArticleHeaderConfig>(({
  children,
  clasName,
  ...rest
}, ref) => {
  function classes() {
    return `${clasName ? clasName : ""} ${article_classes}`;
  }
  return (
    <ContainerStyles className={classes()} {...rest}>
      {children}
    </ContainerStyles>
  );
})

ArticleHeader.displayName ="ArticleHeader";
