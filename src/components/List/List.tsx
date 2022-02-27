import ErrorBoundary from "components/utils/ErrorBoundary";
import ListItem from "components/ListItem";
import type { Props } from "./List.types";
import styles from "./List.module.css";

/**
 * Contains list of waypoint items
 * @param param.waypoints List of waypoint data
 */
function List({ waypoints }: Props) {
  return (
    <ErrorBoundary id="List">
      <div className={styles.root}>
        {waypoints.map((waypoint) => {
          const latLngString = `${waypoint[0]},${waypoint[1]}`;
          return <ListItem key={latLngString} name={latLngString} />;
        })}
      </div>
    </ErrorBoundary>
  );
}

export default List;
