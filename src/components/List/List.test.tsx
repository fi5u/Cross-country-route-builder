import ReactDOM from "react-dom";
import List from "./List";

it("renders without crashing", () => {
  const fn = jest.fn();
  const div = document.createElement("div");
  ReactDOM.render(<List dispatch={fn} waypoints={[]} />, div);
});
