import React from "react";
import { ArticleHeader, ArticleHeading, ArticleTitle } from "../../../components";
import { Box, Section } from "../../../ui";

export function HeroAbout() {
  return (
    <Box paddingSide="lg">
      <Section>
        <ArticleHeader content="right">
          <ArticleHeading as="h2" fCol="gold" size="lg">
            About Us
          </ArticleHeading>
        </ArticleHeader>
      </Section>
    </Box>
  );
}
