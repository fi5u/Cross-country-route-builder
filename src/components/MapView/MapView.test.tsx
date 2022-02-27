import ReactDOM from "react-dom";
import MapView from "./MapView";

it("renders without crashing", () => {
  const fn = jest.fn();
  const div = document.createElement("div");
  ReactDOM.render(<MapView dispatch={fn} waypoints={[]} />, div);
});
