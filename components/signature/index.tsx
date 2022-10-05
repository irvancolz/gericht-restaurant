import { CSS } from "@stitches/react";
import Image from "next/image";
import { forwardRef } from "react";
import Text from "../text";
import {
  Logostyles,
  SignatureStyles,
  SignatureTextStyles,
  SignatureTextWrapperStyles,
  Signaturevariants,
} from "./signature.styles";

interface SignatureProps extends Signaturevariants {
  css?: CSS;
  className?: string;
  rotation?: "left" | "right";
}

const signatureTxt = "DELIGHT IN EVERY BITE ";

const signatureClass = "custom-signature";

const Signature = forwardRef<HTMLDivElement, SignatureProps>(
  ({ className, css, rotation, ...rest }, ref) => {
    function Classes() {
      return `${signatureClass} ${className ? className : ""}`;
    }
    return (
      <SignatureStyles css={css} ref={ref} className={Classes()} {...rest}>
        {/* for the rotating text */}
        <div
          className={SignatureTextWrapperStyles({
            rotate: rotation,
          })}
        >
          {signatureTxt.split("").map((letter, i) => {
            return (
              <SignatureTextStyles
                key={i}
                css={{
                  transform: `rotate(${360 * (i / signatureTxt.length)}deg) `,
                }}
              >
                <Text as="span" fCol="gold">
                  {letter}
                </Text>
              </SignatureTextStyles>
            );
          })}
        </div>
        {/* for the logo */}
        <div className={Logostyles()}>
          <svg
            width="66"
            height="64"
            viewBox="0 0 66 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.7797 20.5029C62.3055 15.9334 63.4377 9.64181 60.3037 6.4776C57.1697 3.31339 50.9383 4.45657 46.4125 9.02605C42.1316 13.3482 40.8892 19.2096 43.4194 22.5092L37.512 28.4735L36.3165 27.2664L8.08421 55.7709L11.4808 59.2003L39.7132 30.6956L38.5178 29.4887L44.4251 23.5244C47.6934 26.0791 53.4988 24.825 57.7797 20.5029ZM37.6176 30.7812L11.5657 57.0842L10.1804 55.6856L36.2323 29.3826L37.6176 30.7812ZM44.9784 21.9506C42.3991 19.3465 43.4938 14.004 47.4185 10.0415C51.3431 6.07898 56.6346 4.97369 59.2139 7.57786C61.7934 10.1822 60.6987 15.5248 56.7741 19.4873C52.8494 23.4498 47.5578 24.5549 44.9784 21.9506Z"
              fill="white"
            />
            <path
              d="M20.0731 9.0219C15.5536 4.44614 9.3307 3.30153 6.20105 6.47009C3.07141 9.63864 4.2021 15.9387 8.72167 20.5145C12.9966 24.8426 18.794 26.0987 22.0576 23.5405L27.9567 29.513L26.7628 30.7218L54.9559 59.2654L58.3478 55.8313L30.1545 27.2876L28.9608 28.4962L23.0616 22.5237C25.5885 19.2194 24.3481 13.35 20.0731 9.0219ZM30.2392 29.4063L56.2549 55.7455L54.8715 57.146L28.8558 30.8069L30.2392 29.4063ZM21.5051 21.9643C18.9293 24.5721 13.6452 23.4653 9.726 19.4974C5.80679 15.5294 4.71357 10.1796 7.28929 7.57186C9.86516 4.96397 15.1494 6.07065 19.0686 10.0386C22.9878 14.0065 24.0809 19.3565 21.5051 21.9643Z"
              fill="white"
            />
          </svg>
        </div>
      </SignatureStyles>
    );
  }
);

Signature.displayName = "Signature";
export default Signature;
