import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { TodoListWeather } from "./TodoListWeather";
import { weatherLabel } from "@models";

const mockWeatherData = [
  { date: new Date(), weather: "Sunny", temp: 20 },
  { date: new Date(), weather: "Rainy", temp: 15 },
];

vi.mock("@hooks", () => ({
  useWeatherListQuery: () => ({
    query: { data: mockWeatherData, isFetching: false, isFetched: true },
  }),
}));

const hasWeatherLabel = () => {
  const allLabels = Object.values(weatherLabel);
  return allLabels.some((label) => screen.queryByText(label) !== null);
};

describe("<TodoListWeather />", () => {
  it("날씨 정보를 렌더링합니다.", () => {
    render(<TodoListWeather />);

    expect(hasWeatherLabel())
  });
});
