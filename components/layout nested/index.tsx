import { ReactNode } from "react";
import { Footer } from "../footer";
import { Layout } from "../layout";

interface NestedLayoutProps {
  children?: ReactNode;
}
export function NestedLayout(props: NestedLayoutProps) {
  return (
    <Layout>
        <main>
            {props.children}
        </main>
      <footer>
        <Footer />
      </footer>
    </Layout>
  );
}
