import Link from "next/link";
import Image from "next/image";
import React, { type ReactElement } from "react";
import { Components } from "../components";
import {
  NotFoundContainerStyles,
  NotFoundSignatureStyles,
  NotFoundContentStyles,
  NotFoundImageStyles,
} from "../styles/not-found.style";
import { UI } from "../ui";
import { NextPageWithLayout } from "./_app";
import notFoundImg from "../public/assets/global/404.png";
import spoonLogo from "../public/assets/global/spoon-logo.svg";

const NotFound: NextPageWithLayout = () => {
  const { Text, Signature, Heading, Section, Button } = Components;
  return (
    <Section className={NotFoundContainerStyles()}>
      <div className={NotFoundContentStyles()}>
        <div className={NotFoundImageStyles()}>
          <Image
            src={notFoundImg}
            alt="pages not found"
            layout="fixed"
            priority
          />
          <div>
            <Image src={spoonLogo} alt="spoon logo" layout="fixed" />
          </div>
        </div>
        <Heading as="h4" align="center" size="md" fCol="normal">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </Heading>
        <Button>
          <Link href={"/"}>
            <Text fCol="dark">Back To Home</Text>
          </Link>
        </Button>
      </div>
      <Signature
        rotation="right"
        className={NotFoundSignatureStyles({
          position: "top",
        })}
      />
      <Signature
        rotation="left"
        className={NotFoundSignatureStyles({
          position: "bottom",
        })}
      />
    </Section>
  );
};

NotFound.getLayout = function getLayout(page: ReactElement) {
  const { Layout } = UI;
  return <Layout>{page}</Layout>;
};

export default NotFound;
