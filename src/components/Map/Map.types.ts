export interface Props {
  onMapClick: (event: L.LeafletEvent & { latlng: L.LatLng }) => void;
}
