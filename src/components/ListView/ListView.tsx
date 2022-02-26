import ErrorBoundary from "components/utils/ErrorBoundary";
import type { Props } from "./ListView.types";
import styles from "./ListView.module.css";
import ListViewHeader from "components/ListViewHeader";

/**
 *
 * @param param.
 */
function ListView({}: Props) {
  return (
    <ErrorBoundary id="ListView">
      <section className={styles.root}>
        <ListViewHeader />
      </section>
    </ErrorBoundary>
  );
}

export default ListView;
