import { createStitches, globalCss } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      cormorant: 'Cormorant Upright, serif',
      sourceSans: 'Source Sans Pro , sans-serif',
      openSans : 'Open Sans, sans-serif',
    },
    colors: {
      goldCol1: "#ddca87",
      goldCol2: "#f5efdb",
      goldCol3: "#ddca8833",
      darkCol1: "#0c0b08",
      darkCol2: "#050505",
      darkCol3: "#272626",
      darkCol4: "#0c0c0c",
      grayCol1: "#a6a6a6",
      grayCol2: "#ababab",
      grayCol3: "#dcca8733",
      shadowCol: "rgba(0, 0, 0, 0.7)",
      textCol: "white",
    },
    fontSizes: {
      1: "16px",
      2: "23px",
      3: "64px",
      4: "90px",
    },
    space: {
      1: "8px",
      2: "16px",
      3: "25px",
      4: "32px",
      5: "48px",
      6: "64px",
    },
    lineHeights: {
      1: "130%",
      2: "175%",
    },
    zIndices: {
      1: "1",
      2: "10",
      3: "100",
      4: "1000",
      5: "10000",
    },
    shadows: {
      s: ""
    }
  },
});

export const globalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "cormorant",
      src: "https://fonts.googleapis.com/css2?family=Cormorant+Upright:wght@300;400;500;600;700&display=swap",
    },
    {
      fontFamily: "openSans",
      src: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap",
    },
    {
      fontFamily: "sansPro",
      src: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap",
    },
  ],
  '*' :{
    margin : '0',
    padding : '0',
    boxSizing: 'border-box',
  },
  'html' :{
    backgroundColor : '$textCol',
  },
  'body' :{
    fontFamily: "$cormorant",
  },
  'a' :{
    color: 'inherit',
    textDecoration : 'none',
    cursor : 'pointer',
  }
});
