import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Slider } from "./Slider";

import { sliderClasses as classes } from "./SliderClasses";
import { faker } from "@faker-js/faker";

describe("<Slider />", () => {
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  it("기본 내용으로 렌더링됩니다.", () => {
    render(
      <Slider>
        <div style={contentStyle}>test1</div>
        <div style={contentStyle}>test2</div>
      </Slider>,
    );

    const slider = screen.getByRole("presentation").parentElement;
    expect(slider?.classList.contains(classes.root)).toBeTruthy();
  });

  it("인덱스와 한도에 따라 랜덤한 내용으로 렌더링됩니다.", () => {
    const index = faker.number.int({ min: 0, max: 100 });
    const limit = faker.number.int({ min: 0, max: 100 });
    render(
      <Slider index={index} limit={limit}>
        {Array.from({ length: faker.number.int({ min: 0, max: 100 }) }).map(
          () => (
            <div style={contentStyle}>{faker.company.name()}</div>
          ),
        )}
      </Slider>,
    );

    const slider = screen.getByRole("presentation").parentElement;
    expect(slider?.classList.contains(classes.root)).toBeTruthy();
  });

  it("드래그시 슬라이더가 스크롤됩니다.", () => {
    const { container } = render(
      <Slider index={0} limit={4}>
        <div style={contentStyle}>test1</div>
        <div style={contentStyle}>test2</div>
      </Slider>,
    );

    expect(fireEvent.scroll(container, { y: 100 })).toBeTruthy();
    expect(fireEvent.scroll(container, { y: -100 })).toBeTruthy();
  });
});
