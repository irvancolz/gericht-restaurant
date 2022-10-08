import { UI } from "../../ui";
import { Copyright } from "../copyright";
import { FooterForm } from "../foooter form";
import { FooterContent } from "../footer content";
import { FooterStyle } from "./footer.style";
export function Footer() {
  const { Section } = UI;
  return (
    <Section as="div" className={FooterStyle()}>
      <FooterForm />
      <>
        <FooterContent />
        <Copyright />
      </>
    </Section>
  );
}
