import { forwardRef } from "react";
import styles from "./text.module.css";

interface textProps {
  children?: string | JSX.Element[];
  fS?: string;
  fF?: string;
  variant?: string;
}

export const Text = forwardRef<HTMLParagraphElement, textProps>((props, ref) => {
  return (
    <span className={styles.text}>
      <p
      ref={ref}
      style={{
         fontSize : props.fS,
         fontFamily: props.fF,
      }}
        className={`${
          props.variant === "desc"
            ? styles.desc
            : props.variant === "title"
            ? styles.title
            : styles.body
        }`}
      >
        {props.children}
      </p>
    </span>
  );
});
