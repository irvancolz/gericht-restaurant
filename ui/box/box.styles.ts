import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";

interface boxFlexConfig {
  display?: string;
  align?: string;
  justify?: string;
}
interface boxPaddingConfig {
  initial?: string;
  large?: string;
  tablet?: string;
  mobile?: string;
}

function createBoxFlexVariatns(props: boxFlexConfig) {
  return {
    display: props.display,
    align: props.align,
    justify: props.justify,
  };
}

function createBoxPaddingVariants(props: boxPaddingConfig) {
  return {
    px: props.initial,
    "@bp3": {
      px: props.large,
    },
    "@bp2": {
      px: props.tablet,
    },
    "@bp1": {
      px: props.mobile,
    },
  };
}

export const BoxStyles = styled("div", {

  variants: {
    flex: {
      center: createBoxFlexVariatns({
        display: "flex",
        align: "center",
        justify: "center",
      }),
      left_top: createBoxFlexVariatns({
        display: "flex",
        align: "start",
        justify: "start",
      }),
      left_bottom: createBoxFlexVariatns({
        display: "flex",
        align: "end",
        justify: "start",
      }),
      left_center: createBoxFlexVariatns({
        display: "flex",
        align: "center",
        justify: "start",
      }),
      right_center: createBoxFlexVariatns({
        display: "flex",
        align: "center",
        justify: "end",
      }),
    },
    paddingSide: {
      sm: createBoxPaddingVariants({
        initial: "$7",
        large: "$4",
        tablet: "$2",
        mobile: "$1",
      }),
      lg: createBoxPaddingVariants({
        initial: "$10",
        large: "$4",
        tablet: "$2",
        mobile: "$1",
      }),
      none: createBoxPaddingVariants({
        initial: "$0",
        large: "$0",
        tablet: "$0",
        mobile: "$0",
      }),
    },
  },
});

export type BoxVariants = ComponentProps<typeof BoxStyles>;
