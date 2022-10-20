import React from 'react'
import {UI} from "../../../ui";
import Image from 'next/image';
import SpoonLogo from "../../../public/assets/global/spoon-logo.png";
import {HeroRestaurantStyles, HeroRestaurantWrapperStyles, NavigationPagesStyles} from "./restautant-hero.style"

interface HeroRestaurantSectionProps {
    setActiveSection : (arg: "bar" | "gericht") => void;
}

export default function HeroRestaurantSection({setActiveSection}: HeroRestaurantSectionProps) {
    const {Button, Text, Section} = UI;
  return (
    <HeroRestaurantWrapperStyles as="div" paddingSide="lg">
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
    <HeroRestaurantStyles as="div">
      <Section>
        <Text>Chase The New Flavour</Text>
        <Image src={SpoonLogo} layout="fixed" alt="spoon"/>
      </Section>
    </HeroRestaurantStyles>
  </HeroRestaurantWrapperStyles>
  )
}
