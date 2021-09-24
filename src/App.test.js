import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./App";

test("renders learn react link", () => {
  const history = createMemoryHistory()
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/Home Page/i);
  expect(linkElement).toBeInTheDocument();
});
