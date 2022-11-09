import React, { ElementType, forwardRef, ReactNode } from "react";
import { Text } from "../../ui";
import { ComponentProps } from "@stitches/react";

interface ArticleTitleConfig extends ComponentProps<typeof Text> {
  className?: string;
  as?: ElementType;
  children?: ReactNode;
}

const title_class = "custom_article_title";

export const ArticleTitle = forwardRef<
  HTMLParagraphElement,
  ArticleTitleConfig
>(({ className, children, ...rest }, ref) => {
  function classes() {
    return `${className ? className : ""} ${title_class}`;
  }
  return (
    <Text ref={ref} className={classes()} {...rest}>
      {children}
    </Text>
  );
});

ArticleTitle.displayName = "ArticleTitle";
