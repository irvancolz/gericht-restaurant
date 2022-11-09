import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";

export const ContainerStyles = styled("header", {
  display: "grid",
  gap: "$1",

  variants: {
    content: {
      center: {
        placeItems: "center",
      },
      right: {
        placeItems: "end",
      },
    },
  },
});

export type ContainerVariants = ComponentProps<typeof ContainerStyles>;
