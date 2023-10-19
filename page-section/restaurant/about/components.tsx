import Image from "next/image";
import React from "react";
import {
  ArticleHeader,
  ArticleHeading,
  SectionWithBg,
} from "../../../components";
import { Box, Text, Button } from "../../../ui";
import knivesSrc from "../../../public/assets/restaurants/restaurant-knives-img.png";
import gSrc from "../../../public/assets/restaurants/restaurant-about-g-img.png";
import bgSrc from "../../../public/assets/restaurants/restaurant-about-bg-img.png";
import {
  HeroAboutContainerStyles,
  AboutRestaurantsStyles,
  AboutBgStyles,
} from "./components.style";

export function HeroAbout() {
  return (
    <SectionWithBg imageSrc={bgSrc}>
      <HeroAboutContainerStyles paddingSide="lg">
        <AboutRestaurantsStyles content="right">
          <ArticleHeader content="right">
            <ArticleHeading as="h2" fCol="gold" size="lg">
              About Us
            </ArticleHeading>
          </ArticleHeader>
          <Box
            css={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <Text
              css={{
                my: "$4",
              }}
              fCol="fade"
              align="end"
              family="open"
              size="sm"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </Text>
            <Button>Know More</Button>
          </Box>
        </AboutRestaurantsStyles>
        <Box>
          <Image src={knivesSrc} layout="fixed" alt="spoon" />
        </Box>
        <AboutRestaurantsStyles>
          <ArticleHeader>
            <ArticleHeading as="h2" fCol="gold" size="lg">
              Our History
            </ArticleHeading>
          </ArticleHeader>
          <Box>
            <Text
              css={{
                my: "$4",
              }}
              fCol="fade"
              family="open"
              size="sm"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </Text>
            <Button>Know More</Button>
          </Box>
        </AboutRestaurantsStyles>
        <AboutBgStyles>
          <Image src={gSrc} alt="g" layout="fixed" />
        </AboutBgStyles>
      </HeroAboutContainerStyles>
    </SectionWithBg>
  );
}
