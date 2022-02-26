import "leaflet/dist/leaflet.css";
import { memo, useEffect, useRef } from "react";
import ErrorBoundary from "components/utils/ErrorBoundary";
import L from "leaflet";
import type { Props } from "./Map.types";
import styles from "./Map.module.css";
import config from "config";

/**
 *
 * @param param.
 */
function Map({ onMapClick }: Props) {
  const map = useRef<L.Map>();

  useEffect(() => {
    map.current = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 10,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: config.externalKeys.mapbox,
      }
    ).addTo(map.current);

    map.current.on("click", onMapClick);
  }, []);

  return (
    <ErrorBoundary id="Map">
      <div className={styles.root} id="map"></div>
    </ErrorBoundary>
  );
}

export default memo(Map);
