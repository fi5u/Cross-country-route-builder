import ReactDOM from "react-dom";
import ListItem from "./ListItem";

it("renders without crashing", () => {
  const fn = jest.fn();
  const div = document.createElement("div");
  ReactDOM.render(
    <ListItem
      deleteWaypoint={fn}
      index={0}
      latLng="53.0583859,-1.7824782"
      reorderWaypoints={fn}
    />,
    div
  );
});
