import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";

export const InputStyles =  styled('input',{
    border: '1px solid red',
    color: '$goldCol1',
    backgroundColor: 'red',
});

export type InputVariants = ComponentProps<typeof InputStyles>;