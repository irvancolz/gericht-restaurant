import React, { type ReactElement } from "react";
import { Components } from "../components";
import { UI } from "../ui";
import { NextPageWithLayout } from "./_app";

const NotFound: NextPageWithLayout = () => {
  const { Signature , Heading, Section } = Components;
  return (
    <Section>
      <Heading color={"fade"} family="cormorant" size={"lg"}>
        Not Found
      </Heading>
    </Section>
  );
};

NotFound.getLayout = function getLayout(page: ReactElement) {
  const { Layout } = UI;
  return <Layout>{page}</Layout>;
};

export default NotFound;
