import { ElementType, forwardRef, ReactNode } from "react";
import { WrapperStyles, WrapperVariants } from "./wrapper.style";
interface WrapperProps extends WrapperVariants {
  children?: ReactNode;
  as?: ElementType;
  className?: string;
}

const wrapper_classes = "custom-wrapper";

export const Wrapper = forwardRef<HTMLSpanElement, WrapperProps>(
  ({ children, className, ...rest }, ref) => {
    function classes() {
      return `${className ? className : ""} ${wrapper_classes}`;
    }
    return (
      <WrapperStyles ref={ref} className={classes()} {...rest}>
        {children}
      </WrapperStyles>
    );
  }
);

Wrapper.displayName = "Wrapper";
