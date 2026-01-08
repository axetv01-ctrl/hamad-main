import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Work from "@/components/Work";
import { test, expect } from "vitest";

test("renders featured projects and View Project links", () => {
  render(
    <BrowserRouter>
      <Work />
    </BrowserRouter>
  );

  // Expect at least one project title to be in the document
  const heading = screen.getByText(/Featured Projects/i);
  expect(heading).toBeInTheDocument();

  // Expect at least one View Project link
  const links = screen.getAllByText(/View Project/i);
  expect(links.length).toBeGreaterThan(0);
});
