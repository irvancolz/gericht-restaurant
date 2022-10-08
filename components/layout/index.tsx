import { Topnav } from "../topnav";
import { UI } from "../../ui";
import { ReactNode } from "react";
import { Copyright } from "../copyright";

interface layoutProps {
  children?: ReactNode;
}
export function Layout(props: layoutProps) {
  const { Section } = UI;
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
