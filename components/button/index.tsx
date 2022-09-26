import { forwardRef, ReactNode } from "react";
import { ButtonStyles, ButtonStylesVariants } from "./button.style";

interface ButtonProps extends ButtonStylesVariants {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  title?: string,
}

const buttonClass = "custom-button";

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  function classNames() {
    return `${buttonClass} ${props.className ? props.className : ''} ${ButtonStyles({
      variant: props.variant,
      padding: props.padding,
      disable: props.disabled,
    })}`;
  }
  return (
    <button
      ref={ref}
      // to overriding styles
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
