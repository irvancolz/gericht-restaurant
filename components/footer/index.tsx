import { Copyright } from "../copyright";
import { FooterForm } from "../foooter form";
import { FooterContent } from "../footer content";
import { Box } from "../../ui";

export function Footer() {
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
