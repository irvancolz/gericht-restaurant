import styles from "./footer.module.css";
import ctntCss from "./fotrctnt.module.css";
import Text from "../text";
import Image from "next/image";
import logo from "../../public/assets/global/web-logo-footer.svg";
import spoon from "../../public/assets/global/spoon-logo.svg";
import twtr from "../../public/assets/global/twit-icon.svg";
import fb from "../../public/assets/global/fb-icon.svg";
import insta from "../../public/assets/global/insta-icon.svg";

export function FooterContent() {
  return (
    <section className={styles.container}>
      <div className={ctntCss.contentC}>
        <div className={ctntCss.content}>
          <Text
            col="var(--gold-col-2)"
            variant="desc"
            fF="var(--title-font)"
            fS="2rem"
          >
            Contact Us
          </Text>
          <div className={ctntCss.body}>
            <Text col="var(--gray-col2)">9 W 53rd St, New York, NY 10019, USA</Text>
            <Text col="var(--gray-col2)">
              +1 212-344-1230 <br /> +1 212-344-1230
            </Text>
          </div>
        </div>
        <div className={ctntCss.content}>
          <span className={ctntCss.logo}>
            <Image src={logo} layout="fixed" alt="gericht" priority />
          </span>
          <div className={ctntCss.body}>
            <Text>
              &ldquo; The best way to find yourself is to lose yourself in the
              service of others. &rdquo;
            </Text>
            <span className={ctntCss.logo}>
              <Image src={spoon} layout="fixed" alt="spoon" priority />
            </span>
            <div className={ctntCss.socialC}>
              <span className={ctntCss.logo}>
                <Image src={fb} layout="fixed" alt="fb" priority />
              </span>
              <span className={ctntCss.logo}>
                <Image src={twtr} layout="fixed" alt="twitter" priority />
              </span>
              <span className={ctntCss.logo}>
                <Image src={insta} layout="fixed" alt="insta" priority />
              </span>
            </div>
          </div>
        </div>
        <div className={ctntCss.content}>
          <Text
            col="var(--gold-col-2)"
            variant="desc"
            fF="var(--title-font)"
            fS="2rem"
          >
            Working Hours
          </Text>
          <div className={ctntCss.body}>
            <Text col="var(--gray-col2)">
              Monday-Friday: <br /> 08:00 am -12:00 am
            </Text>
            <Text col="var(--gray-col2)">
              Saturday-Sunday: <br /> 07:00am -11:00 pm
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
