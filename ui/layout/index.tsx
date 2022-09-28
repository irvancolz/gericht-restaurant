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
      <header>
        <Topnav />
      </header>
      <main>{props.children}</main>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}
