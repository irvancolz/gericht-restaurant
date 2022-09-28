import { CSS } from "@stitches/react";
import { forwardRef, ReactNode } from "react";
import { ButtonStyles, ButtonStylesVariants } from "./button.style";

interface ButtonProps extends ButtonStylesVariants {
  children?: ReactNode;
  className?: string;
  css?: CSS,
}

const buttonClass = "custom-button";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({className, css, children,...rest}, ref) => {
  function classes() {
    return `${buttonClass} ${className ? className : ''}`;
  }
  return (
    <ButtonStyles
    ref={ref}
    className={classes()}
    css={css}
    {...rest}
    >
      {children}
    </ButtonStyles>
  );
});

Button.displayName = "Button";
export default Button;
