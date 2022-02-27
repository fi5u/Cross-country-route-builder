import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

it("fires the onClick callback", () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick}>Test</Button>);
  fireEvent.click(screen.getByRole("button"));
  expect(onClick).toHaveBeenCalled();
});
