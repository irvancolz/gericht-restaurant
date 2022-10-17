import { Copyright } from "../copyright";
import { FooterForm } from "../foooter form";
import { FooterContent } from "../footer content";
import { UI } from "../../ui";

export function Footer() {
  const { Section } = UI;
  return (
    <Section as="div" paddingSide="lg">
      <FooterForm />
      <>
        <FooterContent />
        <Copyright />
      </>
    </Section>
  );
}
