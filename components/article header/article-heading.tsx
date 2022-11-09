import React, { forwardRef, ReactNode } from "react";
import spoon from "../../public/assets/global/spoon-logo.png";
import Image from "next/image";
import { Heading } from "../../ui";
import { ComponentProps } from "@stitches/react";

interface ArticleHeadingConfig extends ComponentProps<typeof Heading> {
  clasName?: string;
  imageClass?: string;
  children?: ReactNode;
}

const heading_class = "custom_article_heading";

export const ArticleHeading = forwardRef<
  HTMLHeadingElement,
  ArticleHeadingConfig
>(({ className, imageClass, children, ...rest }, ref) => {
  function classes() {
    return `${className ? className : ""} ${heading_class}`;
  }
  return (
    <>
      <Heading ref={ref} className={classes()} {...rest}>
        {children}
      </Heading>
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
