import ReactDOM from "react-dom";
import ListView from "./ListView";

it("renders without crashing", () => {
  const fn = jest.fn();
  const div = document.createElement("div");
  ReactDOM.render(<ListView dispatch={fn} waypoints={[]} />, div);
});
