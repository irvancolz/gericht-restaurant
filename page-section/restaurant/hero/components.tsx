import React from "react";
import { Button, Text, Box } from "../../../ui";
import {
  ArticleHeader,
  ArticleTitle,
  ArticleHeading,
  Carousel,
} from "../../../components";
import Img1 from "../../../public/assets/restaurants/restaurant-hero-img.png";
import Img2 from "../../../public/assets/restaurants/restaurant-hero2-img.png";
import Img3 from "../../../public/assets/restaurants/restaurant-hero3-img.png";
import {
  HeroRestaurantStyles,
  HeroRestaurantWrapperStyles,
  NavigationPagesStyles,
} from "./restautant-hero.style";

interface HeroRestaurantSectionProps {
  setActiveSection: (arg: "bar" | "gericht") => void;
}

export function HeroRestaurantSection({
  setActiveSection,
}: HeroRestaurantSectionProps) {
  return (
    <HeroRestaurantWrapperStyles
      paddingSide="lg"
      css={{
        mt: "61px",
        mb: "170px",
      }}
    >
      <NavigationPagesStyles>
        <Box>
          <Button onClick={() => setActiveSection("bar")} variant="ternary">
            <Text css={{ fontSize: "18px" }} family="open">
              #Bar
            </Text>
          </Button>
          <Button onClick={() => setActiveSection("gericht")} variant="ternary">
            <Text css={{ fontSize: "18px" }} family="open">
              #Gericht
            </Text>
          </Button>
        </Box>
      </NavigationPagesStyles>
      <HeroRestaurantStyles>
        <Box className="hero_content">
          <ArticleHeader>
            <ArticleHeading>Chase The New Flavour</ArticleHeading>
            <ArticleTitle size="xl" fCol="gold" weight="xBold">
              The Key To Fine Dining
            </ArticleTitle>
          </ArticleHeader>
          <Text
            family="open"
            size="sm"
            fCol="fade"
            css={{
              my: "$4",
            }}
          >
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus.
          </Text>
          <Button>
            <Text fCol="dark" weight="bold">
              Explore Menu
            </Text>
          </Button>
        </Box>
        <Box className="hero_content">
          <Carousel images={[Img1, Img2, Img3]} />
        </Box>
      </HeroRestaurantStyles>
    </HeroRestaurantWrapperStyles>
  );
}
