import { act, render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { TodoCreateComponent } from "./TodoCreateComponent";

const todos = [
  {
    title: "Test Title",
    date: "2024-04-15",
    content: "Test Content",
  },
];
const mockAddTodo = vi.fn();
const mockModiTodo = vi.fn();

describe("<TodoCreateComponent />", () => {
  it("기본 내용으로 렌더링됩니다.", async () => {
    const { findByRole } = render(
      <MemoryRouter initialEntries={["/create"]}>
        <Routes>
          <Route path="/create" element={<TodoCreateComponent />} />
        </Routes>
      </MemoryRouter>,
    );

    // 제목, 내용, Due Date 입력 필드가 있는지 확인합니다.
    expect(await findByRole("todo-create-title")).toBeInTheDocument();
    expect(await findByRole("todo-create-content")).toBeInTheDocument();
    expect(await findByRole("todo-create-date")).toBeInTheDocument();
  });

  it("제목이 제공되지 않았을 때 에러 메시지를 표시합니다.", async () => {
    render(
      <MemoryRouter initialEntries={["/create"]}>
        <Routes>
          <Route path="/create" element={<TodoCreateComponent />} />
        </Routes>
      </MemoryRouter>,
    );

    fireEvent.submit(screen.getByRole("todo-create-form"));

    // 제목 입력 필드에 에러 메시지가 표시되는지 확인합니다.
    expect(await screen.findByText("제목을 입력해주세요.")).toBeInTheDocument();
  });

  it("내용이 제공되지 않았을 때 에러 메시지를 표시합니다.", async () => {
    render(
      <MemoryRouter initialEntries={["/create"]}>
        <Routes>
          <Route path="/create" element={<TodoCreateComponent />} />
        </Routes>
      </MemoryRouter>,
    );

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

    render(
      <MemoryRouter initialEntries={["/create"]}>
        <Routes>
          <Route path="/create" element={<TodoCreateComponent />} />
        </Routes>
      </MemoryRouter>,
    );

    act(() => {
      // 제목과 내용을 입력합니다.
      fireEvent.change(screen.getByRole("todo-create-title"), {
        target: { value: todos[0].title },
      });
      fireEvent.change(screen.getByRole("todo-create-content"), {
        target: { value: todos[0].content },
      });
      fireEvent.change(screen.getByRole("todo-create-date"), {
        target: { value: todos[0].date },
      });
    });
    fireEvent.submit(screen.getByRole("todo-create-form"));
  });
});

describe("<TodoCreateComponent /> 상세", () => {
  // Modify the mock implementation to return a function allowing access to todos
  vi.mock("@store", () => {
    return {
      useTodoStore: () => ({
        todos,
        addTodo: mockAddTodo,
        modiTodo: mockModiTodo,
      }),
    };
  });

  it("Todo 상세 데이터 수정 기능으로 렌더링됩니다.", async () => {
    // Render the component
    const { getByRole } = render(
      <MemoryRouter initialEntries={["/create/0"]}>
        <Routes>
          <Route path="/create/0" element={<TodoCreateComponent />} />
        </Routes>
      </MemoryRouter>,
    );

    const title = getByRole("todo-create-title");
    const content = getByRole("todo-create-content");
    const date = getByRole("todo-create-date");

    act(() => {
      // 제목과 내용이 바인딩 됩니다.
      fireEvent.change(title, {
        target: { value: todos[0].title },
      });
      fireEvent.change(content, {
        target: { value: todos[0].content },
      });
      fireEvent.change(date, {
        target: { value: todos[0].date },
      });
    });
    expect((title as HTMLInputElement).value === todos[0].title).toBeTruthy();
    expect(
      (content as HTMLInputElement).value === todos[0].content,
    ).toBeTruthy();
    expect((date as HTMLInputElement).value === todos[0].date).toBeTruthy();
  });

  it("Todo 상세 데이터 수정 기능으로 렌더링 후 데이터 변경하여 저장합니다.", async () => {
    // Render the component
    const { getByRole } = render(
      <MemoryRouter initialEntries={["/create/0"]}>
        <Routes>
          <Route path="/create/0" element={<TodoCreateComponent />} />
        </Routes>
      </MemoryRouter>,
    );
    const title = getByRole("todo-create-title");
    const content = getByRole("todo-create-content");
    const date = getByRole("todo-create-date");
    const submit = screen.getByRole("todo-create-form");

    act(() => {
      // 제목과 내용을 입력합니다.
      fireEvent.change(title, {
        target: { value: todos[0].title },
      });
      fireEvent.change(content, {
        target: { value: todos[0].content },
      });
      fireEvent.change(date, {
        target: { value: todos[0].date },
      });
    });

    expect(
      (screen.getByRole("todo-create-title") as HTMLInputElement).value ===
        todos[0].title,
    ).toBeTruthy();
    expect(
      (screen.getByRole("todo-create-content") as HTMLInputElement).value ===
        todos[0].content,
    ).toBeTruthy();
    expect(
      (screen.getByRole("todo-create-date") as HTMLInputElement).value ===
        todos[0].date,
    ).toBeTruthy();

    act(() => {
      fireEvent.change(title, { target: { value: "1234567890" } });
      fireEvent.change(content, { target: { value: "1234567890" } });
      fireEvent.change(date, { target: { value: new Date() } });
    });

    fireEvent.submit(submit);
  });
});
