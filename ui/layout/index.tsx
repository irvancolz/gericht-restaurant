import { Topnav } from "../topnav";
import { Components } from "../../components";
import { ReactNode } from "react";
import { Copyright } from "../copyright";

interface layoutProps {
  children?: ReactNode;
}
export function Layout(props: layoutProps) {
  const { Section } = Components;
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
