import { Topnav } from "../topnav";
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
