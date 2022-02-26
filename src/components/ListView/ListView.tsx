import ErrorBoundary from "components/utils/ErrorBoundary";
import type { Props } from "./ListView.types";
import styles from "./ListView.module.css";
import ListViewHeader from "components/ListViewHeader";
import List from "components/List";

/**
 *
 * @param param.
 */
function ListView({ waypoints }: Props) {
  return (
    <ErrorBoundary id="ListView">
      <section className={styles.root}>
        <ListViewHeader />

        <List waypoints={waypoints} />
      </section>
    </ErrorBoundary>
  );
}

export default ListView;
