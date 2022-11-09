import { CSS } from "@stitches/react";
import { ElementType, forwardRef, ReactNode } from "react";
import { HeadingComp, HeadingCompConfig } from "./heading.style";

interface HeadingProps extends HeadingCompConfig {
  children?: ReactNode;
  className?: string;
  as?: ElementType;
  css?: CSS;
}

const headingClassName = "custom-heading";

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ css, as, className, children, ...rest }, ref) => {
    function classes() {
      return `${headingClassName} ${className ? className : ""}`;
    }

    return (
      <HeadingComp ref={ref} as={as} className={classes()} css={css} {...rest}>
        {children}
      </HeadingComp>
    );
  }
);

Heading.displayName = "Heading";
