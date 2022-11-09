import { css, styled } from "../../stitches.config";
import { Section } from "../../ui";

export const Containerstyles = styled(Section, {
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

export const FormStyles = css({
  display: "flex",
  align: "center",
  justify: "center",
  gap: "$3",
  minWidth: "100%",
  overflow: "hidden",

  "@bp1": {
    fDir: "column",
  },
});
