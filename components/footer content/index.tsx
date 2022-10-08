import Image from "next/image";
import logo from "../../public/assets/global/web-logo-footer.svg";
import spoon from "../../public/assets/global/spoon-logo.svg";
import twtr from "../../public/assets/global/twit-icon.svg";
import fb from "../../public/assets/global/fb-icon.svg";
import insta from "../../public/assets/global/insta-icon.svg";
import { UI } from "../../ui";
import {
  ContainerStyles,
  ContentStyles,
  TextStyles,
  ImageLinkStyles,
} from "./footer-content.style";
import Link from "next/link";

const images = [
  {
    id: 1,
    name: "facebook",
    src: fb,
  },
  {
    id: 2,
    name: "twitter",
    src: twtr,
  },
  {
    id: 3,
    name: "instagram",
    src: insta,
  },
];

export function FooterContent() {
  const { Text, Heading, Section } = UI;
  return (
    <Section as="div" className={ContainerStyles()}>
      <Section className={ContentStyles()}>
        <Heading as="h3" size="nr" fCol="normal">
          Contact Us
        </Heading>
        <div>
          <Text
            size="sm"
            fCol="fade"
            family="source"
            align="center"
            className={TextStyles()}
          >
            9 W 53rd St, New York, NY 10019, USA
          </Text>
          <Text size="sm" fCol="fade" family="source" align="center">
            +1 212-344-1230 <br /> +1 212-344-1230
          </Text>
        </div>
      </Section>
      <div
        className={ContentStyles({
          space: "md",
        })}
      >
        <span>
          <Image src={logo} layout="fixed" alt="gericht" priority />
        </span>
        <div className={ContentStyles()}>
          <Text
            family="lato"
            size="sm"
            align="center"
            css={{
              letterSpacing: ".75px",
            }}
          >
            &ldquo; The best way to find yourself is to lose yourself in the
            service of others. &rdquo;
          </Text>
          <span>
            <Image src={spoon} layout="fixed" alt="spoon" priority />
          </span>
          <div className={ImageLinkStyles()}>
            {images.map((img) => {
              return (
                <span key={img.id}>
                  <Link href="#">
                    <a >
                      <Image
                        src={img.src}
                        layout="fixed"
                        alt={img.name}
                        priority
                      />
                    </a>
                  </Link>
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <Section className={ContentStyles()}>
        <Heading as="h3" size="nr" fCol="normal">
          Working Hours
        </Heading>
        <div>
          <Text
            size="sm"
            fCol="fade"
            family="source"
            align="center"
            className={TextStyles()}
          >
            Monday-Friday: <br /> 08:00 am -12:00 am
          </Text>
          <Text size="sm" fCol="fade" family="source" align="center">
            Saturday-Sunday: <br /> 07:00am -11:00 pm
          </Text>
        </div>
      </Section>
    </Section>
  );
}
