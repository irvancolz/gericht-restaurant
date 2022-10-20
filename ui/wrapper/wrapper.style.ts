import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";

export const WrapperStyles = styled("span",{
    width: "fit-content",
});

export type WrapperVariants = ComponentProps<typeof WrapperStyles>;