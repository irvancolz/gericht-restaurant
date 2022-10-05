import { ComponentProps, keyframes } from "@stitches/react";
import { css, styled } from "../../stitches.config";

const rotate = keyframes({
  "100%": {
    transform: "rotate(360deg)",
  },
});


export const SignatureStyles = styled("div", {
  position: "absolute",
  aspectRatio: "1",
  display: "grid",
  placeItems: "center",
  "@bp2": {
    transform: "scale(.8)",
  },
  "@bp1": {
    transform: "scale(.5)",
  },
});

export const Logostyles = css({});

export const SignatureTextWrapperStyles = css({
  position: "absolute",
  height: "100%",
  width: "100%",
  display: "grid",
  placeItems: "center",
  variants: {
    rotate: {
      left: {
        animation: `${rotate} 60000ms linear infinite reverse`,
      },
      right: {
        animation: `${rotate} 60000ms linear infinite`,
      },
    },
  },
});

export const SignatureTextStyles = styled("span", {
  position: "absolute",
  height: "200%",
});

export type Signaturevariants = ComponentProps<typeof SignatureStyles>;
