import type { ReactElement } from "react";
import { UI } from "../ui";
import { NextPageWithLayout } from "./_app";
import { Components } from "../components";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
  const { Heading, Section, Button } = UI;
  return (
    <>
      <Head>
        <title>Gericht Restaturant</title>
      </Head>
      <Section>
        <Heading>hamburgervons</Heading>
        <Button>test</Button>
      </Section>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  const { NestedLayout } = Components;
  return <NestedLayout>{page}</NestedLayout>;
};

export default Home;
