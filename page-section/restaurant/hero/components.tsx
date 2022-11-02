import React from 'react'
import {Button, Text, Section, Heading} from "../../../ui";
import Image from 'next/image';
import SpoonLogo from "../../../public/assets/global/spoon-logo.png";
import {HeroRestaurantStyles, HeroRestaurantWrapperStyles, NavigationPagesStyles} from "./restautant-hero.style"

interface HeroRestaurantSectionProps {
    setActiveSection : (arg: "bar" | "gericht") => void;
}

export function HeroRestaurantSection({setActiveSection}: HeroRestaurantSectionProps) {
  return (
    <HeroRestaurantWrapperStyles paddingSide="sm">
    <NavigationPagesStyles>
      <Button onClick={() => setActiveSection("bar")} variant="ternary">
        <Text css={{ fontSize: "18px" }} family="open">
          #Bar
        </Text>
      </Button>
      <Button
        onClick={() => setActiveSection("gericht")}
        variant="ternary"
      >
        <Text css={{ fontSize: "18px" }} family="open">
          #Gericht
        </Text>
      </Button>
    </NavigationPagesStyles>
    <HeroRestaurantStyles>
      <Section>
        <Text>Chase The New Flavour</Text>
        <Image src={SpoonLogo} layout="fixed" alt="spoon"/>
        <Heading size="xl">The Key To Fine Dining</Heading>
      </Section>
    </HeroRestaurantStyles>
  </HeroRestaurantWrapperStyles>
  )
}
