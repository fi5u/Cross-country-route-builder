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

  /**
   * Reorder waypoints by supplying original and target lat-long strings
   * @param origLatLngStr Original lat-long string
   * @param targetLatLngStr Target lat-long string
   */
  function handleReorderWaypoints(
    origLatLngStr: string,
    targetLatLngStr: string
  ) {
    const origLatLng = origLatLngStr.split(",").map((str) => parseFloat(str));
    const targetLatLng = targetLatLngStr
      .split(",")
      .map((str) => parseFloat(str));

    dispatch({
      type: "REORDER_WAYPOINTS",
      payload: {
        origIndex: waypoints.findIndex(
          (wp) => wp[0] === origLatLng[0] && wp[1] === origLatLng[1]
        ),
        targetIndex: waypoints.findIndex(
          (wp) => wp[0] === targetLatLng[0] && wp[1] === targetLatLng[1]
        ),
      },
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
              reorderWaypoints={handleReorderWaypoints}
            />
          );
        })}
      </div>
    </ErrorBoundary>
  );
}

export default List;
