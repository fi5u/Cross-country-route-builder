import { useEffect, useRef, useState } from "react";
import ErrorBoundary from "components/utils/ErrorBoundary";
import L from "leaflet";
import Map from "components/Map";
import type { Props } from "./MapView.types";
import styles from "./MapView.module.css";

/**
 * Map view contains much of the logic for calculating map layers (markers,
 * polyline) and passes these to the `Map` component
 * @param param.dispatch Reducer dispatch function to update state
 * @param param.waypoints List of waypoint data
 */
function MapView({ dispatch, waypoints }: Props) {
  const polyline = useRef<L.Polyline>(L.polyline([]));
  const [markers, setMarkers] = useState<L.Marker[]>([]);

  // When `waypoints` list changes, update the markers on the map
  useEffect(() => {
    calulateMarkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waypoints]);

  // When `waypoints` list changes, update the polylines on the map
  useEffect(() => {
    calculatePolyline();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [waypoints]);

  /**
   * Using waypoint data, calculate where the markers should be placed
   */
  function calulateMarkers() {
    setMarkers(
      waypoints.map((waypoint, index) =>
        L.marker(waypoint, {
          draggable: true,
          icon: new L.DivIcon({
            className: "waypoint-marker",
            html: `<span>${index + 1}</span>`,
            iconSize: L.point(24, 24),
          }),
        })
          .on("dragend", (event) => handleUpdateWaypoint(event, index))
          .on("click", () => handleMarkerClick(index))
      )
    );
  }

  /**
   * Using waypoint data, build the polyline
   */
  function calculatePolyline() {
    polyline.current = L.polyline(waypoints, { color: "blue" });
  }

  /**
   * Map has been clicked, add a marker
   * @param event Click event on the map
   */
  function handleMapClick(event: L.LeafletEvent & { latlng: L.LatLng }) {
    dispatch({
      type: "CREATE_WAYPOINT",
      payload: [event.latlng.lat, event.latlng.lng],
    });
  }

  /**
   * A marker has been clicked, remove the waypoint
   * @param index Index of the clicked marker
   */
  function handleMarkerClick(index: number) {
    dispatch({ type: "DELETE_WAYPOINT", payload: waypoints[index] });
  }

  /**
   * Marker has been dragged to a new location, update the waypoints list
   * @param event Marker drag end event
   * @param index Index of the dragged marker
   */
  function handleUpdateWaypoint(event: L.DragEndEvent, index: number) {
    const newLatLng = event.target.getLatLng();
    dispatch({
      type: "UPDATE_WAYPOINT",
      payload: {
        index,
        waypoint: [newLatLng.lat, newLatLng.lng],
      },
    });
  }

  return (
    <ErrorBoundary id="MapView">
      <div className={styles.root}>
        <Map
          markers={markers}
          onMapClick={handleMapClick}
          polyline={polyline.current}
        />
      </div>
    </ErrorBoundary>
  );
}

export default MapView;
