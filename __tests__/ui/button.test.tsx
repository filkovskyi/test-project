import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button, IconButton } from "../../app/components/ui/button";
import { Mail } from "lucide-react";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("applies correct classes for primary variant", () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText("Primary");
    expect(button.classList.contains("bg-primary")).toBe(true);
    expect(button.classList.contains("text-white")).toBe(true);
  });

  it("applies correct classes for secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByText("Secondary");
    expect(button.classList.contains("bg-secondary")).toBe(true);
    expect(button.classList.contains("text-white")).toBe(true);
  });

  it("applies correct classes for different sizes", () => {
    render(<Button size="sm">Small</Button>);
    expect(screen.getByText("Small").classList.contains("px-2")).toBe(true);

    render(<Button size="lg">Large</Button>);
    expect(screen.getByText("Large").classList.contains("px-6")).toBe(true);
  });

  it("renders as a link when href is provided", () => {
    render(<Button href="/test">Link</Button>);
    const link = screen.getByText("Link");
    expect(link.tagName).toBe("A");
    expect(link.getAttribute("href")).toBe("/test");
  });

  it("renders icon on the left by default", () => {
    render(<Button icon={Mail}>Mail</Button>);
    const button = screen.getByText("Mail");
    const icon = button.querySelector("svg");
    expect(icon).toBeDefined();
    expect(icon?.classList.contains("mr-2")).toBe(true);
  });

  it("renders icon on the right when specified", () => {
    render(
      <Button icon={Mail} iconPosition="right">
        Mail
      </Button>
    );
    const button = screen.getByText("Mail");
    const icon = button.querySelector("svg");
    expect(icon).toBeDefined();
    expect(icon?.classList.contains("ml-2")).toBe(true);
  });
});

describe("IconButton", () => {
  it("renders only an icon", () => {
    render(<IconButton icon={Mail} />);
    const button = screen.getByRole("button");
    const icon = button.querySelector("svg");
    expect(icon).toBeDefined();
    expect(button.textContent).toBe("");
  });
});
