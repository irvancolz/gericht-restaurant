import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";

interface boxFlexConfig {
  display?: string;
  align?: string;
  justify?: string;
}

function createBoxFlexVariatns( props : boxFlexConfig) {
  return {
    display: props.display,
    align: props.align,
    justify: props.justify,
  };
}

export const BoxStyles = styled("div", {
  border: "1px solid #eee",
  variants: {
    flex: {
      center: createBoxFlexVariatns({
        display:"flex",
        align:"center",
        justify:"center"
      }),
      left_top: createBoxFlexVariatns({
        display:"flex",
        align:"start",
        justify:"start"
      }),
      left_bottom: createBoxFlexVariatns({
        display:"flex",
        align:"end",
        justify:"start"
      }),
      left_center: createBoxFlexVariatns({
        display:"flex",
        align:"center",
        justify:"start"
      }),
      right_center: createBoxFlexVariatns({
        display:"flex",
        align:"center",
        justify:"end"
      }), 
    },
  },
});


export type BoxVariants = ComponentProps<typeof BoxStyles>;