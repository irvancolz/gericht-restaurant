import { UI } from "../../ui";
import { CopyrightStyles } from "./copyright.styles";

export function Copyright() {
  const { Section } = UI;
  return (
    <Section as="div" className={CopyrightStyles()}>
      <p>2021 Gericht. All Rights reserved.</p>
    </Section>
  );
}
