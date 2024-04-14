import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { TodoListWeather } from "./TodoListWeather";
import { weatherLabel, WeatherType } from "@models";
import { faker } from "@faker-js/faker";

const createWeather = () => {
  return {
    date: faker.date,
    weather: faker.number.int({ min: 1, max: 21 }) as WeatherType,
    temp: Number(faker.number.int({ min: -50, max: 50 })),
  };
};

vi.mock("@hooks", () => ({
  useWeatherListQuery: () => ({
    query: {
      data: faker.helpers.multiple(createWeather, { count: 7 }),
      isFetching: false,
      isFetched: true,
    },
  }),
}));

const hasWeatherLabel = () => {
  const allLabels = Object.values(weatherLabel);
  return allLabels.some((label) => screen.queryByText(label) !== null);
};

describe("<TodoListWeather />", () => {
  it("날씨 정보를 렌더링합니다.", () => {
    render(<TodoListWeather />);

    expect(hasWeatherLabel()).toBe(hasWeatherLabel());
  });

  it("날씨 리스트가 좌우로 스크롤이 됩니다.", () => {
    const { getByRole } = render(<TodoListWeather />);
    const container = getByRole("presentation");

    expect(fireEvent.scroll(container, { y: 100 })).toBeTruthy();
    expect(fireEvent.scroll(container, { y: -100 })).toBeTruthy();
  });
});
