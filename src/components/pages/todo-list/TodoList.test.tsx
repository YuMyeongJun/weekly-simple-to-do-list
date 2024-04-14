import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { TodoListComponent } from "./TodoListComponent";
import { HttpProvider } from "@hooks";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@modules";

const mockNavigate = vi.fn();
vi.mock("react-router", () => ({
  useNavigate: () => mockNavigate,
}));

describe("<TodoListComponent />", () => {
  it("렌더링 됩니다.", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HttpProvider>
          <TodoListComponent />
        </HttpProvider>
      </QueryClientProvider>,
    );
    expect(screen.getByText('THIS WEEK')).toBeTruthy()
  });

  it("추가버튼을 클릭하면 '/create' 경로로 이동합니다.", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HttpProvider>
          <TodoListComponent />
        </HttpProvider>
      </QueryClientProvider>,
    );

    fireEvent.click(screen.getByText("추가버튼"));

    expect(mockNavigate).toHaveBeenCalledWith("/create");
  });
});
