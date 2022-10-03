import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import webLogo from "../../public/assets/global/web-logo.svg";
import { Components } from "../../components";
import {
  TopnavBookLinkStyles,
  TopnavContainerStyles,
  TopnavHeaderStyles,
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
  const { Section, Button, Text } = Components;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function toggleOpen() {
    setIsOpen((curr) => !curr);
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
          <Button>
            <Text family="open" size="sm">
              Log In / Regristration
            </Text>
          </Button>
          <Button>
            <Text family="open" size="sm">
              Book Table
            </Text>
          </Button>
        </div>
        <Button onClick={() => toggleOpen()} padding="none" className="toggle">
          <Text family="open" size="sm">
            &#9776;
          </Text>
        </Button>
      </div>
      <div className={TopnavNavStyles()}>
        <nav className={isOpen ? "open" : ''}>
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
          <Button padding={{
            "@bp2": "none",
          }}>
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
          <Button  padding={{
            "@bp2": "none",
          }}>
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
    </Section>
  );
}
