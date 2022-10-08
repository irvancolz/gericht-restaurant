import { CSS } from "@stitches/react";
import {forwardRef, MouseEvent, ReactNode} from "react";
import { ButtonStyles, ButtonStylesVariants,} from "./button.style";

interface ButtonProps extends ButtonStylesVariants {
  children?: ReactNode;
  className?: string;
  css?: CSS;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const buttonClass = "custom-button";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...rest }, ref) => {

    
    function classes() {
      return `${buttonClass} ${className ? className : ""}`;
    }
    
    return (
      <ButtonStyles
        ref={ref}
        className={classes()}
        {...rest}
      >
        {children}
      </ButtonStyles>
    );
  }
);

Button.displayName = "Button";
export default Button;
