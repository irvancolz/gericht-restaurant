import { ReactNode } from "react";
import { Footer } from "../footer";
import { Layout } from "../layout";

interface NestedLayoutProps {
  children?: ReactNode;
}
export function NestedLayout(props: NestedLayoutProps) {
  return (
    <Layout>
        <section>
            {props.children}
        </section>
      <footer>
        <Footer />
      </footer>
    </Layout>
  );
}
