import ErrorBoundary from "components/utils/ErrorBoundary";
import ListItem from "components/ListItem";
import type { Props } from "./List.types";
import styles from "./List.module.css";

/**
 * Contains list of waypoint items
 * @param param.dispatch Reducer dispatch function to update state
 * @param param.waypoints List of waypoint data
 */
function List({ dispatch, waypoints }: Props) {
  /**
   * Delete a waypoint from the list
   * @param latLng Comma-separated lat-long string
   */
  function handleDeleteWaypoint(latLng: string) {
    dispatch({
      type: "DELETE_WAYPOINT",
      payload: latLng.split(",").map((str) => parseFloat(str)),
    });
  }

  return (
    <ErrorBoundary id="List">
      <div className={styles.root}>
        {waypoints.map((waypoint, index) => {
          const latLngString = `${waypoint[0]},${waypoint[1]}`;
          return (
            <ListItem
              deleteWaypoint={handleDeleteWaypoint}
              index={index}
              key={latLngString}
              latLng={latLngString}
            />
          );
        })}
      </div>
    </ErrorBoundary>
  );
}

export default List;
