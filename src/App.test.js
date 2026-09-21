import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Application renders Home page", () => {
  window.history.pushState({}, "", "/");

  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /home/i
    })
  ).toBeInTheDocument();
});

test("Navigation links are present", () => {
  render(<App />);

  expect(
    screen.getByRole("link", {
      name: /home/i
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("link", {
      name: /about us/i
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("link", {
      name: /contact us/i
    })
  ).toBeInTheDocument();
});
