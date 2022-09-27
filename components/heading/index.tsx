import { CSS } from "@stitches/react";
import { forwardRef, ReactNode } from "react";
import { HeadingComp, HeadingStyles, HeadingVariants } from "./heading.style";

interface HeadingProps extends HeadingVariants {
  children?: ReactNode;
  css?: CSS;
  className?: string;
  as?: string;
}

const headingClassName = "custom-heading";

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  function classes() {
    return `${headingClassName} ${
      props.className ? props.className : ""
    } ${HeadingStyles({
      color: props.color,
      family: props.family,
      size: props.size,
    })}`;
  }

  return (
    <HeadingComp ref={ref} className={classes()} as={props.as}>
      {props.children}
    </HeadingComp>
  );
});

Heading.displayName = "Heading";
export default Heading;
