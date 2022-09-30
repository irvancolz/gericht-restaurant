import spoon from "../../public/assets/global/spoon-logo.svg";
import Image from "next/image";
import { SyntheticEvent } from "react";
import { Components } from "../../components";
import { Containerstyles } from "./footerForm.style";

export  function FooterForm() {
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    console.log('ok')
  }
  const {Button, Input, Heading, Text, Section} = Components;
  return (
    <Section className={Containerstyles()}>
      <header>
        <Heading as='h3'>
          Newsletter
        </Heading>
        <span className="img">
          <Image src={spoon} alt="logo" layout="fixed" priority />
        </span>
      </header>
      <div>
        <Text>Subscribe To Our Newsletter</Text>
        <Text>And never miss latest Updates!</Text>
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input type={'email'} required placeholder='Email Address'/>
          <Button type="submit" variant='primary'>
            Subscribe
          </Button>
        </form>
      </div>
    </Section>
  );
}
