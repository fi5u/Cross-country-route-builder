import ErrorBoundary from "components/utils/ErrorBoundary";
import type { Props } from "./ListView.types";
import styles from "./ListView.module.css";
import ListViewHeader from "components/ListViewHeader";
import List from "components/List";

/**
 * List view contains the component that make up the display of the
 * list of waypoints
 * @param param.dispatch Reducer dispatch function to update state
 * @param param.waypoints List of waypoint data
 */
function ListView({ dispatch, waypoints }: Props) {
  return (
    <ErrorBoundary id="ListView">
      <section className={styles.root}>
        <ListViewHeader />

        {waypoints.length ? (
          <List dispatch={dispatch} waypoints={waypoints} />
        ) : (
          <p className={styles.info}>
            Click on the map to build your list of waypoints.
          </p>
        )}
      </section>
    </ErrorBoundary>
  );
}

export default ListView;
