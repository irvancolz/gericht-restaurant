import styles from "./footer.module.css";
import ctntCss from "./fotrctnt.module.css";
import Text from "../text";
import { Copyright } from "../copyright";
import Image from "next/image";
import logo from "../../public/assets/global/web-logo-footer.svg";
// import spoon from""

export function FooterContent() {
  return (
    <section className={styles.container}>
      <div className={ctntCss.contentC}>
        <div className={ctntCss.content}>
          <Text variant="desc" fF="var(--title-font)" fS="2rem">
            Contact Us
          </Text>
          <div className={ctntCss.body}>
            <Text>9 W 53rd St, New York, NY 10019, USA</Text>
            <Text>+1 212-344-1230</Text>
            <Text>+1 212-344-1230</Text>
          </div>
        </div>
        <div className={ctntCss.content}>
          <span>
            <Image src={logo} layout="fixed" alt="gericht" priority />
          </span>
          <div className={ctntCss.body}>
            <Text>&ldquo; The best way to find yourself is to lose yourself in the service of others. &rdquo;</Text>
            <div>

            </div>
          </div>
        </div>
        <div className={ctntCss.content}>
          <Text variant="desc" fF="var(--title-font)" fS="2rem">
            Working Hours
          </Text>
        </div>
      </div>
      <Copyright />
    </section>
  );
}
