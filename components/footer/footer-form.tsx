import styles from "./footer.module.css";
import formCss from "./fotrfrm.module.css";
import Text from "../text";
import spoon from "../../public/assets/global/spoon-logo.svg";
import Image from "next/image";
import Button from "../button";
import { SyntheticEvent } from "react";

export function FooterForm() {
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
  }
  return (
    <section className={styles.container}>
      <div className={formCss.header}>
        <Text>
          Newsletter
        </Text>
        <span className="img">
          <Image src={spoon} alt="logo" layout="fixed" priority />
        </span>
      </div>
      <div className={formCss.body}>
        <Text>Subscribe To Our Newsletter</Text>
        <Text>And never miss latest Updates!</Text>
      </div>
      <div className={formCss.formC}>
        <form className={formCss.form} onSubmit={(e) => handleSubmit(e)}>
          <input type="email" required placeholder="Email Adress" />
          <Button variant={'primary'}>
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
