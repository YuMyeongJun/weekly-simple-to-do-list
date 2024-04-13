import { act, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Checkbox } from "./Checkbox";
import { checkboxClasses as classes } from "./CheckboxClasses";

describe("<Checkbox />", () => {
  it("렌더링 됩니다.", () => {
    const { container } = render(<Checkbox />);
    expect(
      (container.firstChild as HTMLElement).classList.contains(classes.root),
    ).toBeTruthy();
  });

  it('id를 사용하여 `role="checkbox"`를 렌더링합니다.', () => {
    const { getByRole } = render(<Checkbox id="foo" />);

    expect(getByRole("checkbox").getAttribute("id")).toBe("foo");
  });

  it('name을 사용하여 `role="checkbox"`를 렌더링합니다.', () => {
    const { getByRole } = render(<Checkbox name="foo" />);

    expect(getByRole("checkbox").getAttribute("name")).toBe("foo");
  });

  it("기본적으로 unchecked 상태로 렌더링됩니다.", () => {
    const { getByRole } = render(<Checkbox />);

    expect(getByRole("checkbox")).toHaveProperty("checked", false);
  });

  it("설정한 checked 상태로 렌더링됩니다.", () => {
    const { getByRole } = render(<Checkbox defaultChecked />);

    expect(getByRole("checkbox")).toHaveProperty("checked", true);
  });

  it("이벤트 실행 후 checked 상태가 변경됩니다.", () => {
    const { getByRole } = render(<Checkbox defaultChecked />);

    act(() => {
      getByRole("checkbox").click();
    });

    expect(getByRole("checkbox")).toHaveProperty("checked", false);
  });
});

describe("prop: disabled", () => {
  it("disabled 설정되면 사용자 동작에 응답하지 않습니다.", () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Checkbox disabled onClick={onClick} />);

    const checkbox = getByRole("checkbox");

    act(() => {
      checkbox.click();
    });

    expect(onClick).toHaveBeenCalled();
  });
});

describe("prop: label", () => {
  it("label이 출력됩니다.", () => {
    const { container } = render(<Checkbox label="foo" />);

    expect(container.getElementsByClassName(classes.label)[0].innerHTML).toBe(
      "foo",
    );
  });

  it("label을 선택했을때 checked 상태가 변경됩니다.", () => {
    const { container } = render(<Checkbox label="foo" />);

    expect(
      (container.firstChild as HTMLElement).classList.contains(classes.checked),
    ).not.toBeTruthy();

    act(() => {
      (
        container.getElementsByClassName(classes.label)[0] as HTMLElement
      ).click();
    });

    expect(
      (container.firstChild as HTMLElement).classList.contains(classes.checked),
    ).toBeTruthy();
  });
});

describe("props: slotProps", () => {
  it("root className이 적용됩니다.", () => {
    const { container } = render(
      <Checkbox
        slotProps={{
          root: {
            className: "test",
          },
        }}
      />,
    );

    expect(container.getElementsByClassName(`${classes.root} test`));
  });
  it("checkbox className이 적용됩니다.", () => {
    const { container } = render(
      <Checkbox
        slotProps={{
          checkbox: {
            className: "test",
          },
        }}
      />,
    );

    expect(container.getElementsByClassName(`${classes.checkbox} test`));
  });
  it("input className이 적용됩니다.", () => {
    const { container } = render(
      <Checkbox
        slotProps={{
          input: {
            className: "test",
          },
        }}
      />,
    );

    expect(container.getElementsByClassName(`${classes.input} test`));
  });
  it("labelWrapper className이 적용됩니다.", () => {
    const { container } = render(
      <Checkbox
        slotProps={{
          labelWrapper: {
            className: "test",
          },
        }}
      />,
    );

    expect(container.getElementsByClassName(`${classes.labelWrapper} test`));
  });
  it("label className이 적용됩니다.", () => {
    const { container } = render(
      <Checkbox
        slotProps={{
          label: {
            className: "test",
          },
        }}
      />,
    );

    expect(container.getElementsByClassName(`${classes.label} test`));
  });
  it("subLabel className이 적용됩니다.", () => {
    const { container } = render(
      <Checkbox
        slotProps={{
          subLabel: {
            className: "test",
          },
        }}
      />,
    );

    expect(container.getElementsByClassName(`${classes.subLabel} test`));
  });
});
