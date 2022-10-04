import spoon from "../../public/assets/global/spoon-logo.svg";
import Image from "next/image";
import { SyntheticEvent } from "react";
import { Components } from "../../components";
import { BodyStyles, Containerstyles, FormStyles, HeaderStyles } from "./footerForm.style";

export  function FooterForm() {
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    console.log('ok')
  }
  const {Button, Input, Heading, Text, Section} = Components;
  return (
    <Section className={Containerstyles()}>
      <header className={HeaderStyles()}>
        <Heading as='h3' size='md' fCol={"normal"}>
          Newsletter
        </Heading>
        <span className="img">
          <Image src={spoon} alt="logo" layout="fixed" priority />
        </span>
      </header>
      <div className={BodyStyles()}>
        <Text fCol="gold" weight='medium' size="lg" align="center">Subscribe To Our Newsletter</Text>
        <Text size="sm" family="source">And never miss latest Updates!</Text>
      </div>
      <div className="form">
        <form onSubmit={(e) => handleSubmit(e)} className={FormStyles()}>
          <Input type="email" required placeholder='Email Address'/>
          <Button type="submit" variant='primary'>
            <Text fCol="dark" size="sm" weight="bold">Subscribe</Text>
          </Button>
        </form>
      </div>
    </Section>
  );
}
