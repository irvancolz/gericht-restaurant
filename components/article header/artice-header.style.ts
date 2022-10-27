import { ComponentProps } from "@stitches/react";
import { styled } from "../../stitches.config";
import { UI } from "../../ui";

const { Heading, Text } = UI;

export const ContainerStyles = styled("header", {
  display: "grid",
  gap: "$1",

  variants:{
    content:{
      center:{
        placeItems: "center",
      }
    }
  }
});

export type ContainerVariants = ComponentProps<typeof ContainerStyles>;

export const HeaderStyles = styled(Heading, {});

export type HeaderVariants = ComponentProps<typeof HeaderStyles>;
export const TitleStyles = styled(Text, {});

export type TitleVariants = ComponentProps<typeof HeaderStyles>;
