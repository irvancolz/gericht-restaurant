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
    backgroundColor: props.bgCol,
    "&:hover" :{
      background: "#47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%",
    },
  
    "&:active" :{
      bgCol: "#6eb9f7",
      backgroundSize: "100%",
      transition: "background 0s",
    },
  };
}


export const ButtonStyles = styled("button", {
  position: "relative",
  borderColor: "transparent",
  outlineColor: "transparent",
  backgroundColor: "transparent",
  cursor: "pointer",
  overflow: "hidden",
  backgroundPosition: "center",
  transition: "background 0.3s .2s",

  // properties to create ripple effect

  "&:hover" :{
    background: "#47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%",
  },

  "&:active" :{
    bgCol: "#6eb9f7",
    backgroundSize: "100%",
    transition: "background 0s",
  },


  variants: {
    variant: {
      primary: createButtonColorVariant({
        bgCol: "$goldCol1",
        txtCol: "$darkCol1",
        hoverCol: "$goldCol3",
      }),
      ternary: createButtonColorVariant({
        bgCol: "transparent",
        txtCol: "$textCol",
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
