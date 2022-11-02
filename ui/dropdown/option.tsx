import { ElementType, forwardRef, ReactNode } from "react";
import { OptionStyles, OptionVariants } from "./option.style";

interface Optionprops extends OptionVariants{
    children?: ReactNode;
    as? : ElementType;
    className?: string;
}

const optionClass = "custom-option";

export const Option =forwardRef< HTMLDivElement, Optionprops>(({children, className, as, ...rest}, ref) =>{
   
    function classes(){
        return`${optionClass} ${className ? className : ''}`
    }
    
    return(
        <OptionStyles
        ref={ref}
        as={as}
        className={classes()}
        {...rest}
        >{children}</OptionStyles>
    )
});

Option.displayName = "Option";

