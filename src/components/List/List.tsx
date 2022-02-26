import ErrorBoundary from "components/utils/ErrorBoundary";
import type { Props } from "./List.types";
import styles from "./List.module.css";
import ListItem from "components/ListItem";

/**
 *
 * @param param.
 */
function List({ waypoints }: Props) {
  return (
    <ErrorBoundary id="List">
      <div className={styles.root}>
        {waypoints.map((waypoint) => (
          <ListItem key={waypoint} name={waypoint} />
        ))}
      </div>
    </ErrorBoundary>
  );
}

export default List;
