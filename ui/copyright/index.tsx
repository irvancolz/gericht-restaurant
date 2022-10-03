import { Components } from "../../components";
import { CopyrightStyles } from "./copyright.styles";

export function Copyright() {
  const { Section } = Components;
  return (
    <Section as="div" className={CopyrightStyles()}>
      <p>2021 Gericht. All Rights reserved.</p>
    </Section>
  );
}
