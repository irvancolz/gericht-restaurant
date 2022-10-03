import Section from "../../components/section";
import { Copyright } from "../copyright";
import { FooterForm } from "../foooter form";
import { FooterContent } from "../footer content";
import { FooterStyle } from "./footer.style";
export function Footer() {
  return (
    <Section as="div" className={FooterStyle()}>
      <FooterForm />
      <>
        <FooterContent />
        <Copyright  />
      </>
    </Section>
  );
}
