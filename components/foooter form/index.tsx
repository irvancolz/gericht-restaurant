import spoon from "../../public/assets/global/spoon-logo.svg";
import Image from "next/image";
import { SyntheticEvent, useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { UI } from "../../ui";
import {
  BodyStyles,
  Containerstyles,
  FormStyles,
  HeaderStyles,
} from "./footerForm.style";

gsap.registerPlugin(ScrollTrigger);

export function FooterForm() {
  const { Button, Input, Heading, Text, Box } = UI;
  const containerRef = useRef<HTMLElement>(null);

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    console.log("request sent!");
  }

  useEffect(() => {
    const animation = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.3,
          opacity: 0,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0.01,0.106 0.028,0.412 1,1 "
          ),
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
        },
      });
      tl.from(containerRef.current, {
        opacity: 0,
        duration: 2,
      })
        .from(
          ".header",
          {
            yPercent: -100,
          },
          1
        )
        .from(".text", {
          yPercent: -100,
          stagger: 0.2,
        }, "< +=0.35")
        .from(".input", {
          opacity: 1,
          yPercent: 100,
        })
        .from(".submit", {
          yPercent: 100,
        }, "< +=0.4");
    }, containerRef);
    return () => animation.revert();
  });

  return (
    <Containerstyles ref={containerRef}>
      <HeaderStyles className="header">
        <Heading as="h3" size="md" fCol={"normal"}>
          Newsletter
        </Heading>
        <Box as="span" className="img">
          <Image src={spoon} alt="logo" layout="fixed" priority />
        </Box>
      </HeaderStyles>
      <Box  className={BodyStyles()}>
        <Text
          fCol="gold"
          weight="medium"
          size="lg"
          align="center"
          className="text"
        >
          Subscribe To Our Newsletter
        </Text>
        <Text size="sm" family="source" className="text">
          And never miss latest Updates!
        </Text>
      </Box>
      <Box  className="form">
        <form onSubmit={(e) => handleSubmit(e)} className={FormStyles()}>
          <Input
            type="email"
            required
            placeholder="Email Address"
            className="input"
            css={{
              transformOrigin: "left center",
            }}
          />
          <Button type="submit" variant="primary" className="submit">
            <Text fCol="dark" size="sm" weight="bold">
              Subscribe
            </Text>
          </Button>
        </form>
      </Box>
    </Containerstyles>
  );
}
