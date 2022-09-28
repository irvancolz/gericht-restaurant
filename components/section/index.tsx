import { CSS } from "@stitches/react";
import { forwardRef, ReactNode } from "react";
import { SectionStyles, SectionVariants } from "./section.styles";

interface sectionProps extends SectionVariants {
  children?: ReactNode;
  className?: string;
  css?: CSS;
}

const sectionClass = "custom-section";

const Section = forwardRef<HTMLElement, sectionProps>(({children, css, className,...rest}, ref) => {
  function classes() {
    return `${sectionClass} ${
      className ? className : ""
    }`;
  }
  return (
    <SectionStyles ref={ref} className={classes()} {...rest}>
      {children}
    </SectionStyles>
  );
});

Section.displayName = "Section";
export default Section;
