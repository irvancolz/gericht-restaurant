import { CSS } from "@stitches/react";
import { forwardRef, ReactNode } from "react";
import { TextStyles, TextStylesVariant, TextComp } from "./text.style";

interface TextProps extends TextStylesVariant {
  children?: ReactNode;
  className?: string;
  css?: CSS;
}

const textClassName = "custom-text";
const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  function classes() {
    return `${textClassName} ${props.className ? props.className : ""} ${TextStyles({
      color: props.color,
      family: props.family,
      size: props.size,
      css: props.css,
    })}`;
  }

  return (
    <TextComp ref={ref} className={classes()}>
      {props.children}
    </TextComp>
  );
});

Text.displayName = "Text";
export default Text;
