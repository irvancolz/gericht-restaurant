import { createStitches, globalCss, PropertyValue } from "@stitches/react";

export const { styled, getCssText, css } = createStitches({
  theme: {
    fonts: {
      cormorant: "Cormorant Upright, serif",
      sourceSans: "Source Sans Pro , sans-serif",
      openSans: "Open Sans, sans-serif",
      lato: "Lato, sans-serif",
      poppins: "Poppins, sans-serif",
    },
    colors: {
      goldCol1: "#ddca87",
      goldCol2: "#f5efdb",
      goldCol3: "#dcca8733",
      darkCol1: "#040404",
      darkCol2: "#242424",
      darkCol3: "#0C0C0C",
      grayCol1: "#AAAAAA",
      textCol1: "#ffffff",
      clear: "transparent",
    },
    fontSizes: {
      1: "16px",
      2: "23px",
      3: "32px",
      4: "45px",
      5: "64px",
      6: "90px",
      10: "14px",
      20: "18px",
      30: "26px",
      40: "35px",
      50: "55px",
      60: "72px",
    },
    space: {
      0: "0px",
      one: "1px",
      two: "2px",
      four: "4px",
      1: "8px",
      2: "16px",
      3: "25px",
      4: "32px",
      5: "48px",
      6: "64px",
      7: "120px",
      8: "128px",
      9: "145px",
      10: "310px",
    },
    fontWeights: {
      thin: "300",
      light: "400",
      normal: "500",
      medium: "600",
      bold: "700",
      xBold: "800",
    },
    lineHeights: {
      1: "130%",
      2: "175%",
    },
    zIndices: {
      0: "0",
      1: "1",
      2: "10",
      3: "100",
      4: "1000",
      5: "10000",
    },
  },
  utils: {
    m: (value: PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
      marginTop: value,
      marginBottom: value,
    }),
    my: (value: PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value: PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: PropertyValue<"marginTop">) => ({
      marginTop: value,
    }),
    mb: (value: PropertyValue<"marginBottom">) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<"marginLeft">) => ({
      marginLeft: value,
    }),
    mr: (value: PropertyValue<"marginRight">) => ({
      marginRight: value,
    }),
    pd: (value: PropertyValue<"padding">) => ({
      paddingRight: value,
      paddingLeft: value,
      paddingTop: value,
      paddingBottom: value,
    }),
    py: (value: PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    px: (value: PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: PropertyValue<"paddingTop">) => ({
      paddingTop: value,
    }),
    pb: (value: PropertyValue<"paddingBottom">) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<"paddingLeft">) => ({
      paddingLeft: value,
    }),
    pr: (value: PropertyValue<"paddingRight">) => ({
      paddingRight: value,
    }),
    bgCol: (value: PropertyValue<"backgroundColor">) => ({
      backgroundColor: value,
    }),
    lineCol: (value: PropertyValue<"borderColor">) => ({
      borderColor: value,
    }),
    outCol: (value: PropertyValue<"outlineColor">) => ({
      outlineColor: value,
    }),
    fDir: (value: PropertyValue<"flexDirection">) => ({
      flexDirection: value,
    }),
    fBase: (value: PropertyValue<"flexBasis">) => ({
      flexBasis: value,
    }),
    fGrow: (value: PropertyValue<"flexGrow">) => ({
      flexGrow: value,
    }),
    fWrap: (value: PropertyValue<"flexWrap">) => ({
      flexWrap: value,
    }),
    justify: (value: PropertyValue<"justifyContent">) => ({
      justifyContent: value,
    }),
    align: (value: PropertyValue<"alignItems">) => ({
      alignItems: value,
    }),
    delay: (value: PropertyValue<"transitionDelay">) => ({
      transitionDelay: value,
    }),
  },
  media: {
    bp1: "(max-width: 640px)",
    bp2: "(max-width: 900px)",
    bp3: "(max-width: 1550px)",
  },
});

export const globalStyles = globalCss({
  "@import": [
    'url("https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&display=swap")',
    'url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap")',
    'url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap")',
    'url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap")',
    'url("https://fonts.googleapis.com/css2?family=Poppins&display=swap")',
  ],
  "*": {
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
  },
  html: {
    backgroundColor: "$darkCol1",
    color: "$textCol",
    scrollBehavior: "smooth",
    scrollPaddingTop: "106px",
    "@bp1": {
      scrollPaddingTop: "52px",
    },
  },
  a: {
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer",
  },
});
