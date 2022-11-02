import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import webLogo from "../../public/assets/global/web-logo.svg";
import { Section, Button, Text, Box } from "../../ui";
import {
  TopnavBookLinkStyles,
  TopnavContainerStyles,
  TopnavHeaderStyles,
  TopnavMenuStyles,
  TopnavNavLinkStyles,
  TopnavNavStyles,
} from "./topnav.styles";
gsap.registerPlugin(CustomEase);

const navigationLinks = [
  {
    id: 0,
    label: "Home",
    link: "/",
  },
  {
    id: 1,
    label: "Pages",
    link: "/pages",
  },
  {
    id: 2,
    label: "Contact Us",
    link: "/contactus",
  },
  {
    id: 3,
    label: "Blog",
    link: "/blog",
  },
  {
    id: 4,
    label: "Landing",
    link: "/landing",
  },
];

export function Topnav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerEl = useRef<HTMLDivElement>(null);
  const linkEl = useRef<HTMLParagraphElement>(null);

  function toggleOpen() {
    setIsOpen((curr) => !curr);
  }

  function toggleClass(e: boolean) {
    if (e) {
      return "show";
    } else {
      return "hide";
    }
  }

  // animation goes here
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.3 } });
    const animation = gsap.context(() => {
      tl.from(".logo", {
        duration: 0.5,
        opacity: "0",
        xPercent: -30,
      }).from(".link-text", {
        opacity: "0",
        yPercent: 50,
        stagger: 0.1,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.083,0.294 0.156,0.624 0.422,0.814 0.553,0.907 0.752,1 1,1 "
        ),
      });
    }, containerEl);

    return () => animation.revert();
  }, []);
  return (
    <Section
      as="div"
      ref={containerEl}
      className={TopnavContainerStyles()}
      paddingSide="sm"
    >
      <TopnavHeaderStyles>
        <Box className="logoC">
          <Link href="/" as="/home">
            <a className="logo">
              <Image src={webLogo} alt="gericht" layout="fixed" priority />
            </a>
          </Link>
        </Box>
        {/* Show on tablet */}
        <Box className="navLink">
          <Button variant="ternary">
            <Text family="open" size="sm">
              Log In / Regristration
            </Text>
          </Button>
          <Button variant="ternary">
            <Text family="open" size="sm">
              Book Table
            </Text>
          </Button>
        </Box>
        <Button
          onClick={() => toggleOpen()}
          padding="none"
          className="toggle"
          variant="ternary"
        >
          <Text family="open" size="nr">
            &#9776;
          </Text>
        </Button>
      </TopnavHeaderStyles>
      <TopnavNavStyles className={toggleClass(isOpen)}>
        <TopnavMenuStyles className={toggleClass(isOpen)}>
          <nav>
            {navigationLinks.map((item) => {
              return (
                <Box as="span" key={item.id} className="link">
                  <Link href={item.link}>
                    <TopnavNavLinkStyles
                      ref={linkEl}
                      family="open"
                      size="sm"
                      css={{
                        $$delay: `${(item.id + 1) * 200}ms`,
                      }}
                      className="link-text"
                    >
                      {item.label}
                    </TopnavNavLinkStyles>
                  </Link>
                </Box>
              );
            })}
          </nav>
          {/* show on mobile */}
          <Box>
            <Button
              padding={{
                "@bp2": "none",
              }}
              className="link"
              variant="ternary"
            >
              <TopnavBookLinkStyles
                family="open"
                size="sm"
                position="left"
                css={{
                  $$delay: "1.2s",
                }}
                className="link-text"
              >
                Log In / Regristration
              </TopnavBookLinkStyles>
            </Button>
            <Button
              padding={{
                "@bp2": "none",
              }}
              className="link"
              variant="ternary"
            >
              <TopnavBookLinkStyles
                family="open"
                size="sm"
                position="right"
                css={{
                  $$delay: "1.4s",
                }}
                className="link-text"
              >
                Book Table
              </TopnavBookLinkStyles>
            </Button>
          </Box>
        </TopnavMenuStyles>
      </TopnavNavStyles>
    </Section>
  );
}
