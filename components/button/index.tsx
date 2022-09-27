import { CSS } from "@stitches/react";
import { forwardRef, ReactNode } from "react";
import { ButtonStyles, ButtonStylesVariants } from "./button.style";

interface ButtonProps extends ButtonStylesVariants {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  title?: string,
  css?: CSS,
}

const buttonClass = "custom-button";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  function classNames() {
    return `${buttonClass} ${props.className ? props.className : ''} ${ButtonStyles({
      variant: props.variant,
      padding: props.padding,
      disable: props.disable,
      // to overriding styles
      css: props.css,
    })}`;
  }
  return (
    <button
      ref={ref}
      onClick={props.onClick}
      className={classNames()}
      title={props.title}
    >
      {props.children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
