import { ReactNode } from "react";
import { Footer } from "../footer";
import { Topnav } from "../topnav";

interface NestedLayoutProps {
  children?: ReactNode;
}
export function NestedLayout(props: NestedLayoutProps) {
  return (
    <>
      <header>
        <Topnav />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
