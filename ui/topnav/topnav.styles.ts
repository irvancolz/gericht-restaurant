import { css } from "../../stitches.config";

const ContainerStyles = {
  display: "flex",
  justify: "space-between",
  align: "center",
};

export const TopnavContainerStyles = css({
  ...ContainerStyles,
  px: "$4",
  flexWrap: "wrap",
  position: "sticky",
  top: "-1px",
  zIndex: "$1",
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

export const TopnavNavStyles = css({
  ...ContainerStyles,
  fBase: "70%",
  zIndex: "$2",

  "& nav": {
    ...ContainerStyles,
  },

  "@bp2": {
    position: "absolute",
    top: "100%",
    left: "0",
    right: "0",
    height: "100vh",
    fDir: "column",
    align: "start",
    px: "$2",
    py: "$2",

    "& nav": {
      fDir: "column",
      align: "start",
      justify: "start",
      bgCol: "$darkCol1",
      width: "50%",
      height: "80%",
      pd: "$2",
      borderRadius: "3px",
      border: "1px solid",
      lineCol: "$grayCol3",
      transform: "translateX(calc(-100% - 16px))",
      transition: ".5s ease-in",

      "&.open": {
        transform: "translateX(0)",
        transition: ".5s ease-out",
      },
    },

    "& > div": {
      display: "none",
    },
  },
  "@bp1": {
    pd: "0",

    "& nav": {
      my: "auto",
      width: "calc(100% - 32px)",
    },

    "& > div": {
      display: "block",
      fDir: "column",
      align: "start",
      justify: "start",
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

  "@bp2": {
    py: "0",
    px: "$1",
  },

  variants: {
    position: {
      left: {
        lineCol: "$textCol",
        borderRight: "1px solid",
        pr: "$5",
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
