import { Copyright } from "../copyright";
import { FooterForm } from "../foooter form";
import { FooterContent } from "../footer content";
import { UI } from "../../ui";

export function Footer() {
  const { Box } = UI;
  return (
    <Box paddingSide="lg">
      <FooterForm />
      <>
        <FooterContent />
        <Copyright />
      </>
    </Box>
  );
}
