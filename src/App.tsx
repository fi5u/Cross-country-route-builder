import "./App.css";
import type { AppStateAction } from "types";
import ListView from "components/ListView";
import MapView from "components/MapView";
import { useReducer } from "react";

interface AppState {
  waypoints: string[];
}

const initialState = { waypoints: [] };

function reducer(state: AppState, action: AppStateAction) {
  switch (action.type) {
    case "addWaypoint":
      return { waypoints: state.waypoints.concat(action.payload) };
    case "removeWaypoint":
      return {
        waypoints: state.waypoints.filter(
          (wp: string) => wp !== action.payload
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
      <ListView waypoints={state.waypoints} />
      <MapView dispatch={dispatch} />
    </div>
  );
}

export default App;
