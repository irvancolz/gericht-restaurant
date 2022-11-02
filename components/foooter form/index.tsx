import spoon from "../../public/assets/global/spoon-logo.svg";
import Image from "next/image";
import { SyntheticEvent, useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Button, Input, Text, Box } from "../../ui";
import { BodyStyles, Containerstyles, FormStyles } from "./footerForm.style";
import { ArticleHeader, ArticleTitle, ArticleHeading } from "../article header";

gsap.registerPlugin(ScrollTrigger);

export function FooterForm() {
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
            yPercent: -10,
          },
          1
        )
        .from(
          ".text",
          {
            yPercent: -10,
            stagger: 0.2,
          },
          "< +=0.35"
        )
        .from(".input", {
          opacity: 1,
          yPercent: 10,
        })
        .from(
          ".submit",
          {
            yPercent: 10,
          },
          "< +=0.4"
        );
    }, containerRef);
    return () => animation.revert();
  });

  return (
    <Containerstyles ref={containerRef}>
      <ArticleHeader className="header" content="center">
        <ArticleHeading className="text">
          Newsletter
        </ArticleHeading>
        <ArticleTitle className="text" fCol="gold" size="xl" weight="medium">
          Subscribe To Our Newsletter
        </ArticleTitle>
      </ArticleHeader>
      <Text family="open" size="sm" className={BodyStyles()}>And never miss latest Updates</Text>
      <Box className="form">
        <form onSubmit={(e) => handleSubmit(e)} className={FormStyles()}>
          <Input
            type="email"
            required
            placeholder="Email Address"
            className="input"
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
