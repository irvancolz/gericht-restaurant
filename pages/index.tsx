import { ReactElement, useEffect, useState } from "react";
import { UI } from "../ui";
import { NextPageWithLayout } from "./_app";
import { Components } from "../components";
import Head from "next/head";
import resHeroCaroImg1 from "../public/assets/restaurants/restaurant-hero-img.png";
import resHeroCaroImg2 from "../public/assets/restaurants/restaurant-hero2-img.png";
import resHeroCaroImg3 from "../public/assets/restaurants/restaurant-hero3-img.png";
import { PagesContentStyles, MainContainerStyles } from "../styles/home.style";
import { RestaurantSections } from "../page-section/restaurant";

const resHeroCarouImg = [resHeroCaroImg1, resHeroCaroImg2, resHeroCaroImg3];

const Home: NextPageWithLayout = () => {
  const { HeroRestaurantSection } = RestaurantSections;
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
        </PagesContentStyles>

        {/* bar section goes here */}
        <PagesContentStyles isActive={activeSection === "bar" ? true : false}>
          tst
        </PagesContentStyles>
      </MainContainerStyles>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  const { NestedLayout } = Components;
  return <NestedLayout>{page}</NestedLayout>;
};

export default Home;
