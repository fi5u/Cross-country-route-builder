import ErrorBoundary from "components/utils/ErrorBoundary";
import type { Props } from "./ListViewHeader.types";
import styles from "./ListViewHeader.module.css";
import config from "config";

/**
 *
 * @param param.
 */
function ListViewHeader({}: Props) {
  return (
    <ErrorBoundary id="ListViewHeader">
      <div className={styles.root}>{config.appName}</div>
    </ErrorBoundary>
  );
}

export default ListViewHeader;
