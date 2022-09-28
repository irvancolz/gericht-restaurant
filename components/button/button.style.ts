import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";

interface ButtonVariantConfig {
  bgCol?: string;
  txtCol?: string;
  hoverCol?: string;
}

function createButtonColorVariant(props: ButtonVariantConfig) {
  return ({
    color: props.txtCol,
    backgroundColor: props.bgCol,
    '&:hover' :{
      backgroundColor: props.hoverCol
    }
  })
}

export const ButtonStyles = styled('button',{
  borderColor: "transparent",
  outlineColor: "transparent",
  backgroundColor: "transparent",
  cursor: "pointer",

  variants: {
    variant: {
      primary: createButtonColorVariant({
        bgCol: '$goldCol1',
        txtCol: '$textCol',
        hoverCol: '$goldCol3',
      }),
      ternary: createButtonColorVariant({
        bgCol: 'transparent',
        txtCol: '$textCol',
      })
    },
    padding: {
      true: {
        padding: "$1 $2",
      },
      none: {
        padding: "0",
      },
    },
    disable :{
      true:{
        cursor: 'not-allowed'
      }
    }
  },
  defaultVariants:{
    padding: true,
    variant: 'ternary',
  }
});

export type ButtonStylesVariants = ComponentProps<typeof ButtonStyles>;
