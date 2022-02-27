import ErrorBoundary from "components/utils/ErrorBoundary";
import styles from "./ListViewHeader.module.css";
import config from "config";

/**
 * Displays the title for the list
 */
function ListViewHeader() {
  return (
    <ErrorBoundary id="ListViewHeader">
      <h1 className={styles.root}>{config.appName}</h1>
    </ErrorBoundary>
  );
}

export default ListViewHeader;
