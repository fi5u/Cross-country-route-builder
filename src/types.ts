export interface AppStateAction {
  type: string;
  payload: any;
}

type Waypoint = L.LatLngTuple;
export type Waypoints = Waypoint[];
