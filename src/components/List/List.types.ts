import type { AppStateAction, Waypoints } from "types";

export interface Props {
  dispatch: React.Dispatch<AppStateAction>;
  waypoints: Waypoints;
}
