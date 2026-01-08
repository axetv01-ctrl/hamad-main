import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "@/components/Hero";
import { test, expect } from "vitest";

test("renders hero with name", () => {
  render(<Hero />);
  const name = screen.getByText(/Syed Faisal Kazmi|Hammad Sajid/i);
  expect(name).toBeInTheDocument();
});
