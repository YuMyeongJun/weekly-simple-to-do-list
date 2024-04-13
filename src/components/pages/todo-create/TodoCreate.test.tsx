import { render, screen, fireEvent } from "@testing-library/react";

import { describe, it, expect, vi } from "vitest";

import { TodoCreateComponent } from "./TodoCreateComponent";

const mockNavigate = vi.fn();
const mockAddTodo = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
  addTodo: () => mockAddTodo,
}));

describe("<TodoCreateComponent />", () => {
  it("<TodoCreateComponent /> 렌더링 됩니다.", () => {
    render(<TodoCreateComponent />);

    // 제목, 내용, Due Date 입력 필드가 있는지 확인합니다.
    expect(screen.getByRole("todo-create-title")).toBeInTheDocument();
    expect(screen.getByRole("todo-create-content")).toBeInTheDocument();
    expect(screen.getByRole("todo-create-date")).toBeInTheDocument();
  });

  it("제목이 제공되지 않았을 때 에러 메시지를 표시합니다.", async () => {
    render(<TodoCreateComponent />);

    fireEvent.submit(screen.getByRole("todo-create-form"));

    // 제목 입력 필드에 에러 메시지가 표시되는지 확인합니다.
    expect(await screen.findByText("제목을 입력해주세요.")).toBeInTheDocument();
  });

  it("내용이 제공되지 않았을 때 에러 메시지를 표시합니다.", async () => {
    render(<TodoCreateComponent />);

    fireEvent.submit(screen.getByRole("todo-create-form"));

    // 내용 입력 필드에 에러 메시지가 표시되는지 확인합니다.
    expect(await screen.findByText("내용을 입력해주세요.")).toBeInTheDocument();
  });

  it("폼이 유효한 데이터로 제출될 때 addTodo 함수를 실행시키는지", () => {
    // useTodoStore hook을 모의(Mock)로 변경합니다.
    vi.mock("@store", () => ({
      useTodoStore: () => ({
        addTodo: mockAddTodo,
      }),
    }));

    // useNavigate hook을 mock으로 변경합니다.
    vi.mock("react-router", () => ({
      useNavigate: () => mockNavigate,
    }));

    render(<TodoCreateComponent />);

    // 제목과 내용을 입력합니다.
    fireEvent.change(screen.getByRole("todo-create-title"), {
      target: { value: "Test Title" },
    });
    fireEvent.change(screen.getByRole("todo-create-content"), {
      target: { value: "Test Content" },
    });

    fireEvent.submit(screen.getByRole("todo-create-form"));
  });
});
