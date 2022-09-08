import { forwardRef, ReactNode } from "react";
import styles from "./text.module.css";

interface textProps {
  children?: ReactNode;
  fS?: string;
  fF?: string;
  variant?: string;
  col?: string;
}

const Text = forwardRef<HTMLParagraphElement, textProps>((props, ref) => {
  return (
    <span className={styles.text}>
      <p
      ref={ref}
      style={{
         fontSize : props.fS,
         fontFamily: props.fF,
         color: props.col,
      }}
        className={`${
          props.variant === "body"
            ? styles.body
            : props.variant === "title"
            ? styles.title
            : styles.desc
        }`}
      >
        {props.children}
      </p>
    </span>
  );
});

Text.displayName = 'Text';
export default Text