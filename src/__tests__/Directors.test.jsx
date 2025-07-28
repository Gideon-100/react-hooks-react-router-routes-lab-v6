// 9. src/__tests__/Directors.test.jsx
import { render, screen } from "@testing-library/react";
import Directors from "../pages/Directors";
import "@testing-library/jest-dom";

test("renders Directors page heading", () => {
  render(<Directors />);
  expect(screen.getByText("Directors Page")).toBeInTheDocument();
});