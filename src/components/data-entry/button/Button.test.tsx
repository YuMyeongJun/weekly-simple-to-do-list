import { act, fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./Button";
import { buttonClasses as classes } from "./buttonClasses";

describe("<Button />", () => {
  it("렌더링 됩니다.", () => {
    const { getByTestId } = render(
      <Button data-testid="button">Button</Button>,
    );
    const button = getByTestId("button");

    expect(button.classList.contains(classes.root)).toBeTruthy();
    expect(button.textContent).toEqual("Button");
  });

  it("type 변경", () => {
    const { container, rerender } = render(
      <Button type="button">Hello World</Button>,
    );
    expect(container.firstChild).toHaveProperty("type", "button");

    rerender(<Button type="submit">Hello World</Button>);
    expect(container.firstChild).toHaveProperty("type", "submit");

    rerender(<Button type="reset">Hello World</Button>);
    expect(container.firstChild).toHaveProperty("type", "reset");
  });
});

describe("Props: disabled", () => {
  it("disabled 설정", () => {
    const { getByRole } = render(<Button disabled={true} />);
    const button = getByRole("button");

    expect(button).toHaveProperty("nodeName", "BUTTON");
    expect(button).toHaveProperty("disabled", true);
  });

  it("disabled 설정되면 포커스 불가", () => {
    const { getByRole } = render(<Button disabled={true} />);

    const button = getByRole("button");

    act(() => {
      button.focus();
    });

    expect(document.activeElement).not.toEqual(button);
  });

  it("disabled 설정되면 사용자 동작에 응답하지 불가", () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button disabled={true} onClick={onClick} />);

    const button = getByRole("button");

    act(() => {
      button.click();
      fireEvent.keyDown(button, { key: "Enter" });
      fireEvent.keyUp(button, { key: " " });
    });

    expect(onClick).toHaveBeenCalledTimes(0);
  });
});

describe("이벤트 콜백", () => {
  it("이벤트 콜백이 실행여부", () => {
    const onClick = vi.fn();
    const onBlur = vi.fn();
    const onFocus = vi.fn();
    const onKeyUp = vi.fn();
    const onKeyDown = vi.fn();
    const onMouseDown = vi.fn();
    const onMouseLeave = vi.fn();
    const onMouseUp = vi.fn();

    const { getByText } = render(
      <Button
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyUp={onKeyUp}
        onKeyDown={onKeyDown}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
      >
        Hello
      </Button>,
    );
    const button = getByText("Hello");

    fireEvent.mouseDown(button);
    expect(onMouseDown).toHaveBeenCalledTimes(1);

    fireEvent.mouseUp(button);
    expect(onMouseUp).toHaveBeenCalledTimes(1);

    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);

    fireEvent.focus(button);
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(button);
    expect(onKeyDown).toHaveBeenCalledTimes(1);

    fireEvent.keyUp(button);
    expect(onKeyUp).toHaveBeenCalledTimes(1);

    fireEvent.blur(button);
    expect(onBlur).toHaveBeenCalledTimes(1);

    fireEvent.mouseLeave(button);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });
});
