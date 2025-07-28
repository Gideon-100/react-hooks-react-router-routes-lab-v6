//  src/__tests__/index.test.jsx
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";
import "@testing-library/jest-dom";

test("renders without crashing", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});