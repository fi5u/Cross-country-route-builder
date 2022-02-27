import ErrorBoundary from "components/utils/ErrorBoundary";
import type { Props } from "./Button.types";
import styles from "./Button.module.css";

/**
 * A generic button component
 * @param param.children Text contents of the button
 * @param param.className Class to apply to the component
 * @param param.disabled Whether the button is disabled
 * @param param.onClick Callback function for click event
 * @param param.type Button type
 */
function Button({
  children,
  className,
  disabled,
  onClick,
  type = "button",
}: Props) {
  return (
    <ErrorBoundary id="Button">
      <button
        className={`${styles.root}${
          disabled ? ` ${styles["root--isDisabled"]}` : ""
        }${className ? ` ${className}` : ""}`}
        disabled={disabled}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </ErrorBoundary>
  );
}

export default Button;
