import styles from "./layout.module.css";
import { Topnav } from "../topnav";
import { Footer } from "../footer";
import Image from "next/image";
import pageImg from "../../public/assets/global/main-bg.webp";
import { ReactNode } from "react";
import { Copyright } from "../copyright";

interface layoutProps {
  children?: ReactNode;
}
export function Layout(props: layoutProps) {
  return (
    <>
      <div className={styles.container}>
        <header>
          <Topnav />
        </header>
        <section>{props.children}</section>
        <Copyright />
      </div>
      {/* <span className={styles.mainImg}>
        <Image src={pageImg} alt="page" layout="fixed" priority />
      </span> */}
    </>
  );
}
