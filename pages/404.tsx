import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef, type ReactElement } from "react";
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
import Head from "next/head";

const NotFound: NextPageWithLayout = () => {
  const ContainerEl = useRef(null);
  const { Text, Signature, Heading, Section, Button } = UI;

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "linear",
      },
    });
    const animation = gsap.context(() => {
      tl.from(".signature", {
        duration: 3,
        opacity: 0,
      }).from(".content", {
        opacity: 0,
        yPercent: -100,
        duration: 2,
        ease: "power1.out",
        stagger: 0.2,
      }, 1);
    }, ContainerEl);
    return () => animation.revert();
  }, []);

  return (
    <Section ref={ContainerEl} className={NotFoundContainerStyles()}>
      <Head>
        <title>Gericht | Not Found</title>
      </Head>
      <NotFoundContentStyles >
        <NotFoundImageStyles className="content">
          <Image
            src={notFoundImg}
            alt="pages not found"
            layout="fixed"
            priority
          />
          <div>
            <Image src={spoonLogo} alt="spoon logo" layout="fixed" />
          </div>
        </NotFoundImageStyles>
        <Heading as="h4" align="center" size="md" fCol="normal" className="content">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </Heading>
        <Button className="content">
          <Link href={"/"}>
            <Text fCol="dark">Back To Home</Text>
          </Link>
        </Button>
      </NotFoundContentStyles>
      <NotFoundSignatureStyles
        className="signature"
        rotation="left"
        position="top"
      />
      <NotFoundSignatureStyles
        className="signature"
        rotation="right"
        position="bottom"
      />
    </Section>
  );
};

NotFound.getLayout = function getLayout(page: ReactElement) {
  const { Layout } = Components;
  return <Layout>{page}</Layout>;
};

export default NotFound;
