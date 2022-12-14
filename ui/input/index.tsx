import { CSS } from "@stitches/react";
import { forwardRef } from "react";
import { InputStyles, InputVariants } from "./input.style";

interface InputProps extends InputVariants{
    css?: CSS;
    className?: string;
}

const inputClasses = 'custom-input'

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...rest}, ref)=>{
    function classes(){
        return `${inputClasses} ${className ? className : ''}`;
    }
    return(
        <InputStyles ref={ref} className={classes()} {...rest} />
    );
});

Input.displayName = 'Input';