import spoon from "../../public/assets/global/spoon-logo.svg";
import Image from "next/image";
import { SyntheticEvent, useEffect, useRef } from "react";
import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Button, Input, Text, Box } from "../../ui";
import { Containerstyles, FormStyles } from "./footerForm.style";
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
          ease: "power2.ease-out",
        },
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
      tl.from(containerRef.current, {
        duration: .5,
      })
        .from(
          ".header",
          {
            y: -10,
          },
        )
        .from(
          ".text",
          {
            y: -10,
            stagger: 0.1,
          },
        )
        .from(".input", {
          y: 10,
        })
        .from(
          ".submit",
          {
            y: 10,
          },
        );
    }, containerRef);
    return () => animation.revert();
  });

  return (
    <Containerstyles ref={containerRef}>
      <ArticleHeader className="header" content="center">
        <ArticleHeading className="text">Newsletter</ArticleHeading>
        <ArticleTitle className="text" fCol="gold" size="xl" weight="medium">
          Subscribe To Our Newsletter
        </ArticleTitle>
      </ArticleHeader>
      <Text css={{
        mt:"$3",
        mb:"$6",
      }} family="open" size="sm" className="text">
        And never miss latest Updates
      </Text>
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
