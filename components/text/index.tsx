import { CSS } from "@stitches/react";
import { forwardRef, ReactNode } from "react";
import { TextStyles, TextStylesVariant } from "./text.style";

interface TextProps extends TextStylesVariant {
  children?: ReactNode;
  class?: string;
  css?: CSS;
}


const textClassName = "custom-text";
const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {

  function classes(){
    return`${textClassName} ${props.class ? props.class : ''} ${TextStyles({
      color: props.color,
      family: props.family,
      size: props.size,
      css: props.css,
    })}`
  }

  return (
    <p
    ref={ref}
    className={classes()}
    >
      {props.children}
    </p>
  );
});

Text.displayName = "Text";
export default Text;
