import { forwardRef, ReactNode } from "react";
import { TextStyles, TextStylesVariant } from "./text.style";

interface TextProps extends TextStylesVariant {
  children?: ReactNode;
  class?: string;
}

const TextDefaultProps : TextProps ={
  size : "lg",
  color: "normal",
  family: "open",
}

const textClassName = "custom-text";
const Text = forwardRef<HTMLParagraphElement, TextProps>((props = TextDefaultProps, ref) => {
  return (
    <TextStyles
      ref={ref}
      size={props.size}
      color={props.color}
      family={props.family}
    >
      {props.children}
    </TextStyles>
  );
});

Text.displayName = "Text";
export default Text;
