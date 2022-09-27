import { CSS } from '@stitches/react';
import { forwardRef, ReactNode } from 'react'
import { SectionStyles, SectionVariants } from './section.styles'

interface sectionProps extends SectionVariants{
   children?: ReactNode;
    css?: CSS;
    className?: string,
}

const sectionClass = 'custom-section'

const Section = forwardRef<HTMLElement, sectionProps>((props, ref)=>{
    function classes() {
        return `${sectionClass} ${props.className ? props.className : ''} ${SectionStyles({
          // to overriding styles
          css: props.css,
        })}`;
      }
    return(
        <section 
        ref={ref}
            className={classes()}
            >
            {props.children}
        </section>
    )
});

Section.displayName = 'Section';
export default Section;