import { CSS } from "@stitches/react";
import { ElementType, forwardRef, ReactNode } from "react";
import { SectionStyles, SectionVariants } from "./section.styles";

interface sectionProps extends SectionVariants {
  children?: ReactNode;
  className?: string;
  css?: CSS;
  as?: ElementType;
}

const sectionClass = "custom-section";

const Section = forwardRef<HTMLElement, sectionProps>(({children, as, css, className,...rest}, ref) => {
  function classes() {
    return `${sectionClass} ${
      className ? className : ""
    }`;
  }
  return (
    <SectionStyles as={as} ref={ref} className={classes()} {...rest}>
      {children}
    </SectionStyles>
  );
});

Section.displayName = "Section";
export default Section;
