import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { TodoComponent } from "./TodoComponent";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@modules";
import { faker } from "@faker-js/faker";
import { weatherLabel, WeatherType } from "@models";
import { TodoListWeather } from "./TodoListWeather";
import { TodoList } from "./TodoList";

const mockNavigate = vi.fn();
const mockDeleteTodo = vi.fn();
const mockCompleteTodo = vi.fn();
const createWeather = () => {
  return {
    date: faker.date,
    weather: faker.number.int({ min: 1, max: 21 }) as WeatherType,
    temp: Number(faker.number.int({ min: -50, max: 50 })),
  };
};

const createTodoList = () => {
  return {
    title: faker.company.name(),
    date: faker.date,
    complete: faker.datatype.boolean(),
  };
};

vi.mock("react-router", () => ({
  useNavigate: () => mockNavigate,
}));
vi.mock("@hooks", () => ({
  useWeatherListQuery: () => ({
    query: {
      data: faker.helpers.multiple(createWeather, { count: 7 }),
      isFetching: false,
      isFetched: true,
    },
  }),
}));
vi.mock("@store", () => ({
  useTodoStore: () => ({
    todos: faker.helpers.multiple(createTodoList, {
      count: faker.number.int({ max: 20 }),
    }),
    deleteTodo: mockDeleteTodo,
    completeTodo: mockCompleteTodo,
  }),
}));

describe("<TodoComponent />", () => {
  it("기본 내용으로 렌더링됩니다.", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TodoComponent />
      </QueryClientProvider>,
    );
    expect(screen.getByText("THIS WEEK")).toBeTruthy();
  });

  it("추가버튼을 클릭하면 '/create' 경로로 이동합니다.", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <TodoComponent />
      </QueryClientProvider>,
    );

    fireEvent.click(screen.getByText("추가버튼"));

    expect(mockNavigate).toHaveBeenCalledWith("/create");
  });
});

describe("<TodoListWeather />", () => {
  const hasWeatherLabel = () => {
    const allLabels = Object.values(weatherLabel);
    return allLabels.some((label) => screen.queryByText(label) !== null);
  };

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

describe("<TodoList />", () => {
  it("렌더링합니다.", () => {
    const { container } = render(<TodoList />);

    expect(container).toBeTruthy();
  });

  it("X 버튼을 클릭하면 deleteTodo 함수가 호출됩니다.", () => {
    const { container } = render(<TodoList />);

    fireEvent.click(container.getElementsByClassName("weekly-delete-icon")[0]);

    expect(mockDeleteTodo).toHaveBeenCalled();
  });

  it("체크박스를 클릭하면 completeTodo 함수가 호출됩니다.", () => {
    const { container } = render(<TodoList />);

    fireEvent.click(container.getElementsByTagName("input")[0]);

    expect(mockCompleteTodo).toHaveBeenCalled();
  });
});
