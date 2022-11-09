import Image from "next/image";
import React from "react";
import { ArticleHeader, ArticleHeading } from "../../../components";
import { Box, Text, Button } from "../../../ui";
import knivesSrc from "../../../public/assets/restaurants/restaurant-knives-img.png";
import gSrc from "../../../public/assets/restaurants/restaurant-about-g-img.png";
import {
  HeroAboutContainerStyles,
  AboutRestaurantsStyles,
  AboutBgStyles,
} from "./components.style";

export function HeroAbout() {
  return (
    <HeroAboutContainerStyles paddingSide="lg">
      <AboutRestaurantsStyles content="right">
        <ArticleHeader content="right">
          <ArticleHeading as="h2" fCol="gold" size="lg">
            About Us
          </ArticleHeading>
        </ArticleHeader>
        <Box>
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
  );
}
