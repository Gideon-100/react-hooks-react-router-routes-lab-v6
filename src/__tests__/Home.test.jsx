// 7. src/__tests__/Home.test.jsx
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import "@testing-library/jest-dom";

test("renders Home page heading", () => {
  render(<Home />);
  expect(screen.getByText("Home Page")).toBeInTheDocument();
});