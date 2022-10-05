import { CSS } from "@stitches/react";
import { ElementType, forwardRef, ReactNode } from "react";
import { TextStyles, TextStylesVariant } from "./text.style";

interface TextProps extends TextStylesVariant {
  children?: ReactNode;
  className?: string;
  css?: CSS;
  as?: ElementType;
}

const textClassName = "custom-text";
const Text = forwardRef<HTMLParagraphElement, TextProps>(({css, children, className, ...rest}, ref) => {
  function classes() {
    return `${textClassName} ${className ? className : ""} `;
  }

  return (
    <TextStyles ref={ref} className={classes()} css={css} {...rest}>
      {children}
    </TextStyles>
  );
});

Text.displayName = "Text";
export default Text;
