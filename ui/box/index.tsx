import React, { ElementType, forwardRef, ReactNode } from "react";
import { BoxStyles, BoxVariants } from "./box.styles";

interface BoxProps extends BoxVariants {
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const box_class = "custom-box";

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, className, ...rest }, ref) => {
    function classes() {
      return `${className ? className : ""} ${box_class}`;
    }
    return (
      <BoxStyles ref={ref} className={classes()} {...rest}>
        {children}
      </BoxStyles>
    );
  }
);

Box.displayName = "Box";

