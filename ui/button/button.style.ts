import { ComponentProps, keyframes } from "@stitches/react";
import { styled, css } from "../../stitches.config";

interface ButtonVariantConfig {
  bgCol?: string;
  txtCol?: string;
  hoverCol?: string;
}

function createButtonColorVariant(props: ButtonVariantConfig) {
  return {
    color: props.txtCol,
    bgCol: props.bgCol,
  };
}

const pulse = keyframes({
  "0%" :{
    transform: "scale(0)",
    opacity: "1",
  },
  "100%" :{
    transform: "scale(1)",
    opacity: "0",
  }
})

export const ButtonStyles = styled("button", {
  lineCol: "transparent",
  outCol: "transparent",
  bgCol: "transparent",
  cursor: "pointer",
  backgroundPosition: "center",
  transition: "background 0.3s",
  appearance: "none",
  letterSpacing: "0.04em",

  // properties to create ripple effect


  variants: {
    variant: {
      primary: createButtonColorVariant({
        bgCol: "$goldCol1",
        txtCol: "$darkCol1",
        hoverCol: "$goldCol4",
      }),
      ternary: createButtonColorVariant({
        bgCol: "transparent",
        txtCol: "$textCol",
        hoverCol: "$goldCol4",
      }),
    },
    padding: {
      sm: {
        padding: "$1 $2",
      },
      md: {
        padding: "$1 $4",
      },
      lg: {
        padding: "$1 $5",
      },
      none: {
        padding: "0",
      },
    },
    disable: {
      true: {
        cursor: "not-allowed",
      },
    },
  },
  defaultVariants: {
    padding: "sm",
    variant: "primary",
  },
});

export type ButtonStylesVariants = ComponentProps<typeof ButtonStyles>;

export const RippleVariants = styled("div",{
  variants:{
    show: {
      true:{

      },
      false:{
        
      }
    }
  }
})