import "./App.css";
import type { AppStateAction, Waypoints } from "types";
import ListView from "components/ListView";
import MapView from "components/MapView";
import { useReducer } from "react";

interface AppState {
  waypoints: Waypoints;
}

const initialState = { waypoints: [] };

function reducer(state: AppState, action: AppStateAction) {
  switch (action.type) {
    case "CREATE_WAYPOINT":
      return { waypoints: state.waypoints.concat([action.payload]) };
    case "DELETE_WAYPOINT":
      return {
        waypoints: state.waypoints.filter(
          (wp) => wp[0] !== action.payload[0] || wp[1] !== action.payload[1]
        ),
      };
    case "UPDATE_WAYPOINT":
      return {
        waypoints: state.waypoints.map((waypoint, index) =>
          action.payload.index === index ? action.payload.waypoint : waypoint
        ),
      };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <ListView dispatch={dispatch} waypoints={state.waypoints} />
      <MapView dispatch={dispatch} waypoints={state.waypoints} />
    </div>
  );
}

export default App;
