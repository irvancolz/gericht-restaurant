import React, {
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button, Text, Box } from "../../../ui";
import {
  ArticleHeader,
  ArticleTitle,
  ArticleHeading,
  Carousel,
  CarouselNav,
  carouselConfig,
} from "../../../components";
import Img1 from "../../../public/assets/restaurants/restaurant-hero-img.png";
import Img2 from "../../../public/assets/restaurants/restaurant-hero2-img.png";
import Img3 from "../../../public/assets/restaurants/restaurant-hero3-img.png";
import {
  CarouselNavigationStyles,
  HeroRestaurantStyles,
  HeroRestaurantWrapperStyles,
  NavigationPagesStyles,
} from "./restautant-hero.style";
import gsap from "gsap";

interface HeroRestaurantSectionProps {
  setActiveSection: (arg: "bar" | "gericht") => void;
}

const HeroCarouselContextValue = createContext<carouselConfig>({});

interface HeroCarouselContextConfig {
  children?: ReactNode;
}

function HeroCarouselContext({ children }: HeroCarouselContextConfig) {
  const [navigation, setNavigation] = useState<number>(0);
  const [maxSlide, setMaxSlide] = useState<number>(0);
  return (
    <HeroCarouselContextValue.Provider
      value={{
        navigation,
        maxSlide,
        setNavigation,
        setMaxSlide,
      }}
    >
      {children}
    </HeroCarouselContextValue.Provider>
  );
}

export function HeroRestaurantSection({
  setActiveSection,
}: HeroRestaurantSectionProps) {
  const container = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        duration: 0.3,
        ease: "power1.easeOut",
      },
    });
    const ctx = gsap.context(() => {
      tl.from(".hero_content", {
        opacity: 0,
        duration: 1,
      })
        .from(
          ".text",
          {
            opacity: 0,
            y: 10,
            duration: 0.5,
            stagger: 0.2,
          },
          "-=1"
        )
        .from(
          ".switch-section-btn",
          {
            opacity: 0,
            y: "10px",
            duration: 0.5,
            stagger: 0.1,
            ease: "none",
          },
          "<+=1"
        );
    }, container);
    return () => ctx.revert();
  });

  return (
    <HeroRestaurantWrapperStyles
      paddingSide="lg"
      css={{
        mt: "61px",
        mb: "170px",
      }}
      ref={container}
    >
      <HeroCarouselContext>
        <NavigationPagesStyles>
          <Box>
            <Button
              className="switch-section-btn"
              onClick={() => setActiveSection("bar")}
              variant="ternary"
            >
              <Text css={{ fontSize: "18px" }} family="open">
                #Bar
              </Text>
            </Button>
            <Button
              className="switch-section-btn"
              onClick={() => setActiveSection("gericht")}
              variant="ternary"
            >
              <Text css={{ fontSize: "18px" }} family="open">
                #Gericht
              </Text>
            </Button>
          </Box>
        </NavigationPagesStyles>
        <HeroRestaurantStyles>
          <Box className="hero_content">
            <ArticleHeader>
              <ArticleHeading className="text" imageClass="text">
                Chase The New Flavour
              </ArticleHeading>
              <ArticleTitle
                size="xl"
                fCol="gold"
                className="text"
                weight="xBold"
              >
                The Key To Fine Dining
              </ArticleTitle>
            </ArticleHeader>
            <Text
              family="open"
              size="sm"
              fCol="fade"
              className="text"
              css={{
                my: "$4",
              }}
            >
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus.
            </Text>
            <Button className="text">
              <Text fCol="dark" weight="bold">
                Explore Menu
              </Text>
            </Button>
          </Box>
          <Box className="hero_content carousel_container">
            <Carousel
              context={HeroCarouselContextValue}
              images={[Img1, Img2, Img3]}
            />
          </Box>
        </HeroRestaurantStyles>
        <CarouselNavigationStyles>
          <CarouselNav context={HeroCarouselContextValue} />
        </CarouselNavigationStyles>
      </HeroCarouselContext>
    </HeroRestaurantWrapperStyles>
  );
}
