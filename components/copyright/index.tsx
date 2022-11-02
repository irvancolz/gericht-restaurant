import { Box } from "../../ui";
import { CopyrightStyles } from "./copyright.styles";

export function Copyright() {
  return (
    <Box as="div" className={CopyrightStyles()}>
      <p>2021 Gericht. All Rights reserved.</p>
    </Box>
  );
}
