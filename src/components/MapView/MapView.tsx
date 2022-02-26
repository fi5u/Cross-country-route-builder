import ErrorBoundary from "components/utils/ErrorBoundary";
import type { Props } from "./MapView.types";
import styles from "./MapView.module.css";
import Map from "components/Map";

/**
 *
 * @param param.
 */
function MapView({}: Props) {
  return (
    <ErrorBoundary id="MapView">
      <div className={styles.root}>
        <Map />
      </div>
    </ErrorBoundary>
  );
}

export default MapView;
