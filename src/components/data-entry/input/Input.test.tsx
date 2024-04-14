import { act, fireEvent, render, screen } from "@testing-library/react";

import { Input } from "./Input";
import { inputClasses } from "./InputClasses";

describe("<Input />", () => {
  it("렌더링 체크", () => {
    render(<Input name="test" />);
    const input = screen.getByRole("textbox");
    expect(input.classList.contains(inputClasses.root)).toBeTruthy();
  });

  it("placeholder 체크", () => {
    render(<Input name="test" placeholder="test" />);

    expect(screen.getByPlaceholderText("test")).toBeTruthy();
  });

  it("input value 일치 여부", () => {
    render(<Input />);
    const input: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test1" } });
    expect(input.value).toBe("test1");
  });

  it("max length 체크", () => {
    render(<Input />);
    const maxLengthTest: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(maxLengthTest, { target: { value: "1234567890" } });
    expect(maxLengthTest.value.length >= 10).toBeTruthy();
  });

  it("disabled 체크", () => {
    const onClick = vi.fn();
    const onChange = vi.fn();

    render(<Input onClick={onClick} onChange={onChange} />);

    const disabledTest = screen.getByRole("textbox");
    fireEvent.change(disabledTest, { target: { disabled: true } });
    expect(disabledTest).toHaveProperty("disabled", true);

    act(() => {
      disabledTest.click();
      fireEvent.keyDown(disabledTest, { key: "Enter" });
      fireEvent.keyUp(disabledTest, { key: " " });
    });

    expect(document.activeElement).not.toEqual(disabledTest);
    expect(onClick).toHaveBeenCalledTimes(0);
    expect(onChange).toHaveBeenCalledTimes(0);
  });

  it("onPressEnter 함수 실행 확인", () => {
    const onPressEnter = vi.fn();
    render(<Input onPressEnter={onPressEnter} />);

    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    expect(onPressEnter).toBeCalledTimes(1);
  });
});
