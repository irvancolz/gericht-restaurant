import { ElementType, forwardRef, ReactNode } from "react";
import { SelectStyles, SelectVariants } from "./select.style";

interface SelectProps extends SelectVariants{
    children?: ReactNode;
    as?: ElementType;
}

const Select = forwardRef< HTMLDivElement, SelectProps>(({children,...rest}, ref) =>{
    return(
        <SelectStyles ref={ref} {...rest}>{children}</SelectStyles>
    );
});

Select.displayName = "Select";
export default Select;