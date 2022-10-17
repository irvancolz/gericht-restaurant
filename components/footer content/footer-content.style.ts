import { css, styled } from "../../stitches.config";
import { UI } from "../../ui";
const { Section } = UI;

export const ContainerStyles = css({
  mt: "$7",
  mb: "$6",
  display: "flex",
  align: "flex-start",
  justify: "space-between",
  gap: "$2",

  "@bp2": {
    fWrap: "wrap",
    gap: "$3",
    mt: "$4",
    mb: "$3",
  },
  "@bp1": {
    gap: "$4",
  },
});

export const ContentStyles = styled(Section, {
  display: "flex",
  fDir: "column",
  justify: "center",
  align: "center",

  "&:nth-child(2)": {
    fBase: "100%",
  },

  variants: {
    space: {
      sm: {
        gap: "$2",
      },
      md: {
        gap: "$4",
      },
    },
  },

  "@bp2": {
    "&:nth-child(2)": {
      order: "0",
    },
    "&:not(:nth-child(2))": {
      order: "2",
      fBase: "calc(50% - 8px)",
    },
  },
  "@bp1": {
    "&:not(:nth-child(2))": {
      fBase: "100%",
    },
  },
  defaultVariants: {
    space: "sm",
  },
});

export const TextStyles = css({
  mb: "$1",
});

export const ImageLinkStyles = css({
  display: "flex",
  gap: "$2",
});
