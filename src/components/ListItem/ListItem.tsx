import React, { useRef, useState } from "react";
import ErrorBoundary from "components/utils/ErrorBoundary";
import type { Props } from "./ListItem.types";
import { ReactComponent as ReorderIcon } from "static/graphics/reorder.svg";
import { ReactComponent as TrashIcon } from "static/graphics/trash.svg";
import styles from "./ListItem.module.css";

/**
 * Single waypoint item
 * @param param.deleteWaypoint Callback function to delete waypoint
 * @param param.index List index of waypoint item
 * @param param.latLng Comma-separated lat-long string
 * @param param.reorderWaypoints Callback function to change the order of the waypoints
 */
function ListItem({ deleteWaypoint, index, latLng, reorderWaypoints }: Props) {
  // Keep a reference to the item for dragging
  const itemRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);

  /**
   * Delete waypoint button pressed, remove the waypoint from the list
   */
  function handleDeleteWaypoint() {
    deleteWaypoint(latLng);
  }

  /**
   * Dragging has started, set the data on the drag event
   * @param event Drag event
   */
  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    event.dataTransfer.setData("text", event.currentTarget.id);
    event.dataTransfer.dropEffect = "move";

    setIsDragging(true);
  }

  /**
   * Dragging has ended, set the state
   */
  function handleDragEnd() {
    setIsDragging(false);
  }

  /**
   * Item is being dragged over, prevent any additional event processing
   * @param event Drag event
   */
  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  /**
   * Item has been dropped, fetch the data from the drop item and begin
   * the reorder
   * @param event Drag event
   */
  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    setIsDragging(false);

    const origLatLng = event.dataTransfer.getData("text");
    const targetLatLng = event.currentTarget.id;

    reorderWaypoints(origLatLng, targetLatLng);
  }

  return (
    <ErrorBoundary id="ListItem">
      <div
        className={`${styles.root}${
          isDragging ? ` ${styles["root--isDragging"]}` : ""
        }`}
        draggable="true"
        id={latLng}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
        onDragStart={handleDragStart}
        onDrop={handleDrop}
        ref={itemRef}
      >
        <div className={styles.nameGroup}>
          <button
            className={`${styles.iconButton} ${styles.reorderButton}`}
            type="button"
          >
            <ReorderIcon />
          </button>
          {`Waypoint ${index + 1}`}{" "}
        </div>

        <button
          className={styles.iconButton}
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
