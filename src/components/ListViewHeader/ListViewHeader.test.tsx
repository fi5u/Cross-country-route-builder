import ReactDOM from "react-dom";
import ListViewHeader from "./ListViewHeader";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListViewHeader />, div);
});
