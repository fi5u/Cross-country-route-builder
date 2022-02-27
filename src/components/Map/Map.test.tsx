import { fireEvent, render, screen } from "@testing-library/react";
import L from "leaflet";
import Map from "./Map";

it("fires the onClick callback", () => {
  const fn = jest.fn();

  render(
    <Map
      markers={[L.marker([53.0583859, -1.7824782])]}
      onMapClick={fn}
      polyline={L.polyline([])}
    />
  );
  fireEvent.click(screen.getByTestId("map"));
  expect(fn).toHaveBeenCalled();
});
