// 8. src/__tests__/Actors.test.jsx
import { render, screen } from "@testing-library/react";
import Actors from "../pages/Actors";
import "@testing-library/jest-dom";

test("renders Actors page heading", () => {
  render(<Actors />);
  expect(screen.getByText("Actors Page")).toBeInTheDocument();
});
