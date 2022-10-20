import { css, styled } from "../stitches.config";
import { UI } from "../ui";

const {Signature, Box} = UI;

export const NotFoundContainerStyles = css({
  height: "75vh",
  display: "flex",
  align: "center",
  justify: "center",

  "@bp2": {
    height: "85vh",
  },

  "@bp1": {
    height: "90vh",
  },
});

export const NotFoundLogoStyles = css({
  position: "relative",

});

export const NotFoundSignatureStyles = styled(Signature,{
  variants: {
    position: {
      top: {
        top: "10%",
        right: "10%",
        "@bp2": {
          top: "10%",
          right: "5%",
        },

        "@bp1": {
          top: "5%",
          right: "5%",
        },
      },
      bottom: {
        left: "10%",
        bottom: "10%",
        "@bp2": {
            left: "5%",
            bottom: "10%",
          },
  
          "@bp1": {
            left: "0%",
            bottom: "10%",
          },
      },
    },
  },
});

export const NotFoundContentStyles = styled(Box,{
    position: "relative",
    display: 'flex',
    fDir: "column",
    justify: "center",
    align: "center",
    gap: "$4",
    maxWidth: "550px",

    "@bp1" :{
      width: "50%",
    },
});

export const NotFoundImageStyles = styled(Box,{
  display: "flex",
  fDir: "column",
  align: "center",
  gap: "$2",
  "@bp2" :{
    "& > span:first-child" :{
      transform: "scale(.7)",
    },
  },
  "@bp1" :{
    "& > span:first-child" :{
      transform: "scale(.5)",
    },
  },
});