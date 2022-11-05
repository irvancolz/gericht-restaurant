import { ReactElement, useEffect, useState } from "react";
import { NextPageWithLayout } from "./_app";
import { NestedLayout } from "../components";
import Head from "next/head";
import { PagesContentStyles, MainContainerStyles } from "../styles/home.style";
import { HeroAbout, HeroRestaurantSection } from "../page-section";

const Home: NextPageWithLayout = () => {
  const [activeSection, setActiveSection] = useState<"bar" | "gericht">(
    "gericht"
  );

  useEffect(() => {}, [activeSection]);
  return (
    <>
      <Head>
        <title>Gericht Restaturant</title>
      </Head>
      <MainContainerStyles>
        {/* restaurant section goes here */}
        <PagesContentStyles
          isActive={activeSection === "gericht" ? true : false}
        >
          <HeroRestaurantSection setActiveSection={setActiveSection} />
          <HeroAbout/>
        </PagesContentStyles>

        {/* bar section goes here */}
        <PagesContentStyles isActive={activeSection === "bar" ? true : false}>
         
        </PagesContentStyles>
      </MainContainerStyles>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <NestedLayout>{page}</NestedLayout>;
};

export default Home;
