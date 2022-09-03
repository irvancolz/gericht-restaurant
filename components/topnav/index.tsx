import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Section } from "../section";
import styles from "./topnav.module.css";
import webLogo from '../../public/assets/global/web-logo.png'

const navigationLinks = [
    {
        id: 0,
        label: 'Home',
        link: '/',
    },
    {
        id: 1,
        label: 'Pages',
        link: '/pages',
    },
    {
        id: 2,
        label: 'Contact Us',
        link: '/contactus',
    },
    {
        id: 3,
        label: 'Blog',
        link: '/blog',
    },
    {
        id: 4,
        label: 'Landing',
        link: '/landing',
    },
]

export function Topnav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function toggleOpen() {
    setIsOpen((curr) => !curr);
    console.log(isOpen);
  }
  return (
    <Section justify="space-between" paddingX="2rem" paddingY="1rem">
      <div className={styles.logoC}>
        <div>
          <Link href='/'>
            <a>
              <Image src={webLogo} alt='gericht' layout="intrinsic" priority/>
            </a>
          </Link>
        </div>
        <span onClick={() => toggleOpen()} className={styles.toggleI}>&#9776;</span>
      </div>
      <div className={styles.mainC}>
        <nav>
            {navigationLinks.map(item =>{
                return(
                    <span key={item.id} className={styles.link}>
                        <Link href={item.link}>{item.label}</Link>
                    </span>
                )
            })}
        </nav>
      </div>
      <div className={styles.regsC}>
        <div className="regs">
            
        </div>
        <span onClick={() => toggleOpen()} className={styles.toggleI}>&#9776;</span>
      </div>
    </Section>
  );
}
