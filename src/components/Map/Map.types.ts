export interface Props {
  markers: L.Marker[];
  onMapClick: (event: L.LeafletEvent & { latlng: L.LatLng }) => void;
  polyline: L.Polyline;
}
