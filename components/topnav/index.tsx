import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  return (
    <Section as="div" className={TopnavContainerStyles()}>
      <div className={TopnavHeaderStyles()}>
        <div className="logo">
          <Link href="/" as="/home">
            <a>
              <Image src={webLogo} alt="gericht" layout="intrinsic" priority />
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
          <Button  variant="ternary">
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
                <span key={item.id}>
                  <Link href={item.link}>
                    <Text
                      family="open"
                      size="sm"
                      className={TopnavNavLinkStyles()}
                    >
                      {item.label}
                    </Text>
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
              variant="ternary"
            >
              <Text
                family="open"
                size="sm"
                className={TopnavBookLinkStyles({
                  position: "left",
                })}
              >
                Log In / Regristration
              </Text>
            </Button>
            <Button
              padding={{
                "@bp2": "none",
              }}
              variant="ternary"
            >
              <Text
                family="open"
                size="sm"
                className={TopnavBookLinkStyles({
                  position: "right",
                })}
              >
                Book Table
              </Text>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
