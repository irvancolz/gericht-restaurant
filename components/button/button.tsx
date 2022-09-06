import styles from "./button.module.css";
interface buttonProps {
  variant?: string;
  children?: string | JSX.Element[] | JSX.Element;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'; 
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
      type={props.type}
      className={`${styles.btn} ${
        props.variant === "primary"
          ? styles.primary
          : props.variant === "secondary"
          ? styles.secondary
          : styles.ternary
      }`}
      onClick={() => props.onClick?.()}
    >
      {props.children}
    </button>
  );
}
