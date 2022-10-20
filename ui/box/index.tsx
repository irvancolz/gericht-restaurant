import React, { forwardRef, ReactNode } from "react";
import { BoxStyles, BoxVariants } from "./box.styles";

interface BoxProps extends BoxVariants {
  children?: ReactNode;
  className?: string;
}

const box_class = "custom-box";

const Box = forwardRef<HTMLDivElement, BoxProps>(
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
export default Box;
