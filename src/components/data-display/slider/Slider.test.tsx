import { render, screen } from "@testing-library/react";
import { describe, it, expect, } from "vitest";
import { Slider } from "./Slider";

import { sliderClasses as classes } from "./SliderClasses";

describe("<Slider />", () => {
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  it("렌더링 됩니다.", () => {
    render(
      <Slider index={0} limit={4}>
        <div style={contentStyle}>test1</div>
        <div style={contentStyle}>test2</div>
      </Slider>,
    );

    const slider = screen.getByRole("presentation").parentElement;
    expect(slider?.classList.contains(classes.root)).toBeTruthy();
  });

  it("slider drag 테스트", () => {
    const { container } = render(
      <Slider index={0} limit={4}>
        <div style={contentStyle}>test1</div>
        <div style={contentStyle}>test2</div>
      </Slider>,
    );

    expect((container.firstChild as HTMLElement).scrollTo && (container.firstChild as HTMLElement).scrollTo({ left: 50 }));
  });
});
