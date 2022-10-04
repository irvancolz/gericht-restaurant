import { keyframes } from "@stitches/react";
import { css } from "../../stitches.config";

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
  position: "sticky",
  top: "-1px",
  zIndex: "$1",
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

  "@bp2": {
    fGrow: "1",

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

export const TopnavNavLinkStyles = css({
  padding: "$1 $2",
  minWidth: "max-content",
  cursor: "pointer",
  position: "relative",

  "&::before": {
    content: "",
    bottom: "0",
    position: "absolute",
    height: "2px",
    bgCol: "$goldCol1",
    width: "0",
    transition: "width .2s ease-in-out",
  },

  "@bp2": {
    py: "0",
    textAlign: "left",
    fBase: "100%",
    "&:hover": {
      color: "$goldCol1",
      "&::before": {
        width: "100%",
      },
    },
  },
});

export const TopnavBookLinkStyles = css({
  py: "$1",
  minWidth: "max-content",
  position: "relative",

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

    "&:hover": {
      color: "$goldCol1",
      "&::before": {
        width: "100%",
      },
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

  "& nav": {
    ...ContainerStyles,
    fWrap: "wrap",
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
    },

    "&.hide": {
      animation: `${SlideOut} 400ms ease-in`,
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
  "@bp2": {
    position: "absolute",
    top: "100%",
    height: "100vh",
    left: "0",
    right: "0",
    fBase: "70%",
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
  "bp1" :{
    pd: "$1",
  }
});
