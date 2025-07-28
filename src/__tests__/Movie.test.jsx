// 10. src/__tests__/Movie.test.jsx
import { render, screen } from "@testing-library/react";
import Movie from "../pages/Movie";
import "@testing-library/jest-dom";

test("renders Movie page heading", () => {
  render(<Movie />);
  expect(screen.getByText("Movie Page")).toBeInTheDocument();
});