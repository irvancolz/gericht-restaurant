import { ReactElement, useEffect, useState } from "react";
import { UI } from "../ui";
import { NextPageWithLayout } from "./_app";
import { Components } from "../components";
import Head from "next/head";
import Link from "next/link";
import { ContainerStyles, MainContainerStyles } from "../styles/home.style";

const Home: NextPageWithLayout = () => {
  const { Heading, Section, Button, Text } = UI;
  const [activeSection, setActiveSection] = useState<"bar" | "gericht">(
    "gericht"
  );

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);
  return (
    <>
      <Head>
        <title>Gericht Restaturant</title>
      </Head>
      <MainContainerStyles>
        <ContainerStyles
          as="div"
          id="gericht"
          isActive={activeSection === "gericht" ? true : false}
        >
          <Section as="div" paddingSide="sm">
            <div className="navigation">
              <Link href="#bar">
                <a onClick={() => setActiveSection("bar")}>#Bar</a>
              </Link>
              <Link href="#gericht">#Gericht</Link>
            </div>
            <div className="content">
              <div className="article">
                <Heading>Article</Heading>
              </div>
              <div className="carousel">
                <Text>Carousel</Text>
              </div>
            </div>
          </Section>
        </ContainerStyles>
        <ContainerStyles
          as="div"
          id="bar"
          isActive={activeSection === "bar" ? true : false}
        >
          <Section paddingSide="sm">
            <div className="navigation">
              <Link href="#bar">#Bar</Link>
              <Link href="#gericht">
                <a onClick={() => setActiveSection("gericht")}>#Gericht</a>
              </Link>
            </div>
            <Heading>Bar</Heading>
            <Text>Carousel</Text>
          </Section>
        </ContainerStyles>
      </MainContainerStyles>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  const { NestedLayout } = Components;
  return <NestedLayout>{page}</NestedLayout>;
};

export default Home;
