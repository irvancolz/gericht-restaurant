import { ReactNode } from "react";
import { FooterForm } from "../foooter form";
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
        <FooterForm />
      </footer>
    </>
  );
}
