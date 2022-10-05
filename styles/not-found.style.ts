import { css } from "../stitches.config";

export const NotFoundContainerStyles = css({
  height: "80vh",
  display: "grid",
  placeItems: "center",

  "@bp2": {
    height: "85vh",
  },

  "@bp1": {
    height: "90vh",
  },
});

export const NotFoundSignatureStyles = css({
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
        left: "-10%",
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

export const NotFoundContentStyles = css({
    position: "relative",
    display: 'flex',
    fDir: "column",
    justify: "center",
    align: "center",
    gap: "$4",
    maxWidth: "550px",
});

export const NotFoundImageStyles = css({
  display: "flex",
  fDir: "column",
  align: "center",
  gap: "$2",
});