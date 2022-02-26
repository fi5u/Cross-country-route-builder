import ErrorBoundary from "components/utils/ErrorBoundary";
import type { Props } from "./MapView.types";
import styles from "./MapView.module.css";
import Map from "components/Map";

/**
 *
 * @param param.
 */
function MapView({ dispatch }: Props) {
  function handleMapClick(event: L.LeafletEvent & { latlng: L.LatLng }) {
    // console.log(`${event.latlng.lat},${event.latlng.lng}`);
    dispatch({
      type: "addWaypoint",
      payload: `${event.latlng.lat},${event.latlng.lng}`,
    });
  }

  return (
    <ErrorBoundary id="MapView">
      <div className={styles.root}>
        <Map onMapClick={handleMapClick} />
      </div>
    </ErrorBoundary>
  );
}

export default MapView;
