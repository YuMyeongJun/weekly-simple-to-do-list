import { render, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { TodoListTodo } from "./TodoListTodo";
import { faker } from "@faker-js/faker";

const mockDeleteTodo = vi.fn();
const mockCompleteTodo = vi.fn();
const createTodoList = () => {
  return {
    title: faker.company.name(),
    date: faker.date,
    complete: faker.datatype.boolean(),
  };
};

vi.mock("@store", () => ({
  useTodoStore: () => ({
    todos: faker.helpers.multiple(createTodoList, {
      count: faker.number.int({ max: 20 }),
    }),
    deleteTodo: mockDeleteTodo,
    completeTodo: mockCompleteTodo,
  }),
}));

describe("<TodoListTodo />", () => {
  it("렌더링합니다.", () => {
    const { debug, container } = render(<TodoListTodo />);
    // debug(container)
    expect(container).toBeTruthy();
  });

  it("X 버튼을 클릭하면 deleteTodo 함수가 호출됩니다.", () => {
    const { container } = render(<TodoListTodo />);

    fireEvent.click(container.getElementsByClassName("weekly-delete-icon")[0]);

    expect(mockDeleteTodo).toHaveBeenCalled();
  });

  it("체크박스를 클릭하면 completeTodo 함수가 호출됩니다.", () => {
    const { container } = render(<TodoListTodo />);

    fireEvent.click(container.getElementsByTagName("input")[0]);

    expect(mockCompleteTodo).toHaveBeenCalled();
  });
});
