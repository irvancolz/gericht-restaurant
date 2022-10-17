import { keyframes } from "@stitches/react";
import { css, styled } from "../../stitches.config";
import { UI } from "../../ui";

const { Text } = UI;

const ContainerStyles = {
  display: "flex",
  justify: "space-between",
  align: "center",
};

const SlideIn = keyframes({
  "0%": {
    transform: "translateX(-100%)",
  },
  "100%": {
    transform: "translateX(0)",
  },
});

const SlideOut = keyframes({
  "0%": {
    transform: "translateX(0)",
  },
  "100%": {
    transform: "translateX(-100%)",
  },
});

export const TopnavContainerStyles = css({
  ...ContainerStyles,
  px: "$4",
  flexWrap: "wrap",
  "@bp2": {
    px: "$2",
  },
  "@bp1": {
    px: "$1",
  },
});

export const TopnavHeaderStyles = css({
  ...ContainerStyles,
  "& .navLink, & .toggle": {
    display: "none",
  },

  "& .logoC": {
    position: "relative",
    "& .logo": {
      transform: "translateY(-50%)",
      position: "absolute",
    },
  },

  "@bp2": {
    fGrow: "1",

    "& > *:not(:last-child)": {
      fBase: "50%",
    },
    "& .navLink, & .toggle": {
      display: "block",
    },
  },

  "@bp1": {
    "& .navLink": {
      display: "none",
    },
  },
});

export const TopnavNavLinkStyles = styled(Text, {
  padding: "$1 $2",
  minWidth: "max-content",
  cursor: "pointer",
  position: "relative",

  "&::before": {
    content: "",
    bottom: "0",
    left: "0",
    position: "absolute",
    height: "2px",
    bgCol: "$goldCol1",
    width: "0",
    transition: "width .2s ease-in-out",
  },

  "&:hover": {
    color: "$goldCol1",
    "&::before": {
      width: "100%",
    },
  },

  "@bp2": {
    py: "0",
    textAlign: "left",
    fBase: "100%",
  },
});

export const TopnavBookLinkStyles = styled(Text, {
  py: "$1",
  minWidth: "max-content",
  position: "relative",

  "&:hover": {
    color: "$goldCol1",
    "&::before": {
      width: "100%",
    },
  },

  "@bp2": {
    py: "0",
    px: "$1",
    "&::before": {
      content: "",
      position: "absolute",
      bottom: "0",
      bgCol: "$goldCol1",
      height: "2px",
      width: "0",
      transition: "width .2s ease-in-out",
    },
  },

  variants: {
    position: {
      left: {
        pr: "$5",
        lineCol: "$textCol",
        borderRight: "1px solid",
        "@bp2": {
          pr: "0",
          lineCol: "none",
          borderRight: "none",
        },
      },
      right: {
        pl: "$5",
        "@bp2": {
          pl: "0",
        },
      },
    },
  },
});

export const TopnavMenuStyles = css({
  ...ContainerStyles,
  $$delay: ".3s",

  "& nav": {
    ...ContainerStyles,
    fWrap: "wrap",
  },

  "& .link": {
    overflow: "hidden",
  },
  "@bp2": {
    width: "50%",
    fDir: "column",
    justify: "start",
    align: "start",
    pd: "$2",
    bgCol: "$darkCol1",
    border: "1px solid",
    lineCol: "$goldCol3",
    borderRadius: "3px",

    "&.show": {
      animation: `${SlideIn} 400ms ease-out`,
      [`& ${TopnavNavLinkStyles}, & ${TopnavBookLinkStyles}`]: {
        transition: "transform .5s ease-out, opacity .3s ease-out .1s",
        transitionDelay: "$$delay",
        transform: "translateX(0%)",
        opacity: "1",
      },
    },

    "&.hide": {
      animation: `${SlideOut} 400ms ease-in`,
      [`& ${TopnavNavLinkStyles}, & ${TopnavBookLinkStyles}`]: {
        transform: "translateX(-100%)",
        opacity: "0",
      },
    },

    "& nav": {
      fDir: "column",
      align: "flex-start",
    },

    "& > div": {
      display: "none",
    },
  },
  "@bp1": {
    width: "calc(100% - 16px)",

    "& > div": {
      display: "flex",
      fDir: "column",
      align: "start",
      position: "relative",
    },
  },
});

export const TopnavNavStyles = css({
  fBase: "65%",
  "@bp2": {
    position: "absolute",
    top: "100%",
    height: "100vh",
    left: "0",
    right: "0",
    zIndex: "$2",
    fGrow: "1",
    pd: "$2",
    bgCol: "$shadowCol",

    "&.hide": {
      opacity: "0",
      visibility: "hidden",
      pointerEvents: "none",
      delay: "400ms",
    },

    "&.show": {
      opacity: "1",
      visibility: "visible",
      pointerEvents: "auto",
    },
  },
  "@bp3":{
    fBase: "70%",
  },
  "@bp1": {
    pd: "$1",
  },
});
