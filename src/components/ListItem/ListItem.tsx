import ErrorBoundary from "components/utils/ErrorBoundary";
import type { Props } from "./ListItem.types";
import styles from "./ListItem.module.css";
import { ReactComponent as TrashIcon } from "static/graphics/trash.svg";

/**
 * Single waypoint item
 * @param param.deleteWaypoint Callback function to delete waypoint
 * @param param.index List index of waypoint item
 * @param param.latLng Comma-separated lat-long string
 */
function ListItem({ deleteWaypoint, index, latLng }: Props) {
  /**
   * Delete waypoint button pressed, remove the waypoint from the list
   */
  function handleDeleteWaypoint() {
    deleteWaypoint(latLng);
  }

  return (
    <ErrorBoundary id="ListItem">
      <div className={styles.root}>
        {`Waypoint ${index + 1}`}{" "}
        <button
          className={styles.deleteButton}
          onClick={handleDeleteWaypoint}
          type="button"
        >
          <TrashIcon />
        </button>
      </div>
    </ErrorBoundary>
  );
}

export default ListItem;
