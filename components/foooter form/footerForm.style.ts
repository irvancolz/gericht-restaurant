import { css, styled } from "../../stitches.config";
import { UI } from "../../ui";

const {Section,Box} = UI;

export const Containerstyles = styled(Section ,{
  display: "flex",
  fDir: "column",
  align: "center",
  border: "1px solid",
  pd: "$6",
  lineCol: "$goldCol3",
  bgCol: "$darkCol3",

  "& .form": {
    flexGrow: 1,
    minWidth: "100%",
  },
});

export const HeaderStyles = styled(Box,{
  display: "flex",
  fDir: "column",
  align: "center",
  justify: "center",
});

export const BodyStyles = css({
  display: "flex",
  fDir: "column",
  align: "center",
  justify: "center",
  mb: "$6",
});

export const FormStyles = css({
  display: "flex",
  align: "center",
  justify: "center",
  gap: "$3",
  minWidth: "100%",
  overflow: "hidden",

  "@bp1" :{
    fDir: "column",
  }
});
