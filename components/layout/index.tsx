import styles from "./layout.module.css";
import { Topnav } from "../topnav";
import { Footer } from "../footer";
import Image from "next/image";
import pageImg from "../../public/assets/global/main-bg.webp";

interface layoutProps {
  children?: JSX.Element;
}
export function Layout(props: layoutProps) {
  return (
    <>
      <div className={styles.container}>
        <header>
          <Topnav />
        </header>
        <main>{props.children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
      <span className={styles.mainImg}>
        <Image src={pageImg} alt="page" layout="fixed" priority />
      </span>
    </>
  );
}
