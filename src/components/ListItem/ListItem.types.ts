export interface Props {
  deleteWaypoint: (latLng: string) => void;
  index: number;
  latLng: string;
  reorderWaypoints: (originalLatLng: string, targetLatLng: string) => void;
}
