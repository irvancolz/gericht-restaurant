import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import webLogo from "../../public/assets/global/web-logo.svg";
import { UI } from "../../ui";
import {
  TopnavBookLinkStyles,
  TopnavContainerStyles,
  TopnavHeaderStyles,
  TopnavMenuStyles,
  TopnavNavLinkStyles,
  TopnavNavStyles,
} from "./topnav.styles";

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
  const { Section, Button, Text } = UI;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerEl = useRef<HTMLDivElement>(null);

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
        duration: 3,
        opacity: "0",
        x: "-30%",
      });
    }, containerEl);

    return () => animation.revert();
  }, []);
  return (
    <Section as="div" ref={containerEl} className={TopnavContainerStyles()}>
      <div className={TopnavHeaderStyles()}>
        <div className="logoC">
          <Link href="/" as="/home">
            <a className="logo">
              <Image src={webLogo} alt="gericht" layout="fixed" priority />
            </a>
          </Link>
        </div>
        {/* Show on tablet */}
        <div className="navLink">
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
        </div>
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
      </div>
      <div className={`${TopnavNavStyles()} ${toggleClass(isOpen)}`}>
        <div className={`${TopnavMenuStyles()} ${toggleClass(isOpen)}`}>
          <nav>
            {navigationLinks.map((item) => {
              return (
                <span key={item.id} className="link">
                  <Link href={item.link}>
                    <TopnavNavLinkStyles
                      family="open"
                      size="sm"
                      css={{
                        $$delay: `${(item.id + 1) * 200}ms`,
                      }}
                    >
                      {item.label}
                    </TopnavNavLinkStyles>
                  </Link>
                </span>
              );
            })}
          </nav>
          {/* show on mobile */}
          <div>
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
              >
                Book Table
              </TopnavBookLinkStyles>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
