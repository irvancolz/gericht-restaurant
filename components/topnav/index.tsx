import Image from "next/image";
import Link from "next/link";
import { CSSProperties, useState } from "react";
import { Section } from "../section";
import styles from "./topnav.module.css";
import webLogo from "../../public/assets/global/web-logo.svg";
import Button  from "../button";

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
  function toggleOpen() {
    setIsOpen((curr) => !curr);
  }
  return (
    <Section justify="space-between" paddingX="2rem" paddingY="1rem">
      <div className={styles.logoC}>
        <div className={styles.logo}>
          <Link href="/" as="/home">
            <a>
              <Image src={webLogo} alt="gericht" layout="intrinsic" priority />
            </a>
          </Link>
        </div>
        {/* Show on tablet */}
        <div className={styles.regs}>
          <Button>
            <span className={styles.link}>Log In / Regristration</span>
          </Button>
          <Button>
            <span className={styles.link}>Book Table</span>
          </Button>
        </div>
        <Button onClick={() => toggleOpen()} padding='none'>
          <span className={styles.toggleI}>&#9776;</span>
        </Button>
      </div>
      <div className={`${styles.mainC} ${isOpen && styles.open}`}>
        <nav>
          {navigationLinks.map((item) => {
            return (
              <span key={item.id}
              style={{
                '--delay' : item.id,
              } as CSSProperties}
              className={styles.link}>
                <Link href={item.link}>{item.label}</Link>
              </span>
            );
          })}
        </nav>
        {/* show on mobile */}
        <div className={styles.regs}>
          <Button>
            hamburgervons
            {/* <span className={styles.link}>Log In / Regristration</span> */}
          </Button>
          <Button >
            <span className={styles.link}>Book Table</span>
          </Button>
        </div>
      </div>
    </Section>
  );
}
