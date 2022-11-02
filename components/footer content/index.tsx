import Image from "next/image";
import logo from "../../public/assets/global/web-logo-footer.svg";
import spoon from "../../public/assets/global/spoon-logo.svg";
import twtr from "../../public/assets/global/twit-icon.svg";
import fb from "../../public/assets/global/fb-icon.svg";
import insta from "../../public/assets/global/insta-icon.svg";
import { Text, Heading, Section, Box } from "../../ui";
import {
  ContainerStyles,
  ContentStyles,
  TextStyles,
  ImageLinkStyles,
} from "./footer-content.style";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    id: 1,
    name: "facebook",
    src: fb,
  },
  {
    id: 2,
    name: "twitter",
    src: twtr,
  },
  {
    id: 3,
    name: "instagram",
    src: insta,
  },
];

export function FooterContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animation = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        scrollTrigger: {
          start: "bottom bottom",
        },
      });

      tl.from(".content:nth-child(2)", {
        yPercent: 50,
      })
        .from(".image", {
          yPercent: 50,
        })
        .from(".main-text", {
          yPercent: 100,
        })
        .from(".content:not(:nth-child(2))", {
          yPercent: 50,
          stagger: 0.2,
        })
        .from(".side-text", {
          yPercent: 50,
          duration: 0.75,
          stagger: 0.2,
        });
    }, containerRef);
    return () => animation.revert();
  }, []);

  return (
    <Section as="div" ref={containerRef} className={ContainerStyles()}>
      <ContentStyles className="content">
        <Heading as="h3" size="nr" fCol="fadeGold">
          Contact Us
        </Heading>
        <Box className="side-text">
          <Text
            size="sm"
            fCol="fade"
            family="source"
            align="center"
            className={TextStyles()}
          >
            9 W 53rd St, New York, NY 10019, USA
          </Text>
          <Text size="sm" fCol="fade" family="source" align="center">
            +1 212-344-1230 <br /> +1 212-344-1230
          </Text>
        </Box>
      </ContentStyles>
      <ContentStyles as="div" space="md" className="content">
        <Box as="span" className="image">
          <Image src={logo} layout="fixed" alt="gericht" priority />
        </Box>
        <ContentStyles>
          <Text
            family="lato"
            size="sm"
            align="center"
            css={{
              letterSpacing: ".75px",
            }}
            className="main-text"
          >
            &ldquo; The best way to find yourself is to lose yourself in the
            service of others. &rdquo;
          </Text>
          <Box as ="span">
            <Image src={spoon} layout="fixed" alt="spoon" priority />
          </Box>
          <ImageLinkStyles>
            {images.map((img) => {
              return (
                <Box as="span" key={img.id}>
                  <Link href="#">
                    <a>
                      <Image
                        src={img.src}
                        layout="fixed"
                        alt={img.name}
                        priority
                      />
                    </a>
                  </Link>
                </Box>
              );
            })}
          </ImageLinkStyles>
        </ContentStyles>
      </ContentStyles>
      <ContentStyles className="content">
        <Heading as="h3" size="nr" fCol="fadeGold">
          Working Hours
        </Heading>
        <Box className="side-text">
          <Text
            size="sm"
            fCol="fade"
            family="source"
            align="center"
            className={TextStyles()}
          >
            Monday-Friday: <br /> 08:00 am -12:00 am
          </Text>
          <Text size="sm" fCol="fade" family="source" align="center">
            Saturday-Sunday: <br /> 07:00am -11:00 pm
          </Text>
        </Box>
      </ContentStyles>
    </Section>
  );
}
