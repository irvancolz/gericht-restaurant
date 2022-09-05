import styles from "./button.module.css";
interface buttonProps {
  variant?: string;
  children?: string | JSX.Element[] | JSX.Element;
  onClick?: () => void;
}
const buttonDefaultProps: buttonProps = {
  variant: "primary",
  onClick: () => {
    return;
  },
  children: "Actions",
};
export function Button(props: buttonProps = buttonDefaultProps) {
  return (
    <button
      className={`${styles.btn} ${
        props.variant === "primary"
          ? styles.primary
          : props.variant === "secondary"
          ? styles.secondary
          : styles.primary
      }`}
      onClick={() => props.onClick?.()}
    >
      {props.children}
    </button>
  );
}
