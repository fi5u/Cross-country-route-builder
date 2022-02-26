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
function Map({ markers, onMapClick, polyline }: Props) {
  const map = useRef<L.Map>();
  const markerGroup = useRef<L.LayerGroup | null>(L.layerGroup(markers));

  useEffect(() => {
    map.current = L.map("map").setView([51.505, -0.09], 13);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        accessToken: config.externalKeys.mapbox,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/streets-v11",
        maxZoom: 10,
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(map.current);

    map.current.on("click", onMapClick);
  }, []);

  // When `markers` change, first remove current markers and update the list
  useEffect(() => {
    markerGroup.current?.removeLayer(markerGroup.current);

    markerGroup.current = map.current
      ? L.layerGroup(markers).addTo(map.current)
      : null;
  }, [markers]);

  // When `polyline` changes, update the polyline
  useEffect(() => {
    if (!map.current || !polyline) {
      return;
    }

    polyline.addTo(map.current);
  }, [polyline]);

  return (
    <ErrorBoundary id="Map">
      <div className={styles.root} id="map"></div>
    </ErrorBoundary>
  );
}

export default memo(Map);
