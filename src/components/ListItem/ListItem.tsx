import ErrorBoundary from "components/utils/ErrorBoundary";
import type { Props } from "./ListItem.types";
import styles from "./ListItem.module.css";

/**
 *
 * @param param.
 */
function ListItem({ name }: Props) {
  return (
    <ErrorBoundary id="ListItem">
      <div className={styles.root}>{name}</div>
    </ErrorBoundary>
  );
}

export default ListItem;
