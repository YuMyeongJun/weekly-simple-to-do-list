import * as React from "react";

export interface CheckboxProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> {
  /**
   * `true`인 경우 구성 요소가 체크
   * @default false
   */
  checked?: boolean;
  /**
   * 구성 요소가 체크되었을때 표시되는 아이콘
   * @default <CheckBoxIcon />
   */
  checkedIcon?: React.ReactNode;
  /**
   * 구성 요소의 색상
   * @default 'primary'
   */
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "dark";
  /**
   * 기본 선택 상태 비제어 컴포넌트일때 사용
   */
  defaultChecked?: boolean;
  /**
   * `true`인 경우 구성 요소가 비활성화
   * @default false
   */
  disabled?: boolean;
  /**
   * 구성 요소가 체크되지 않았을때 표시되는 아이콘
   * @default <UncheckBoxIcon />
   */
  uncheckedIcon?: React.ReactNode;
  /**
   * `input` 구성 요소의 `id` 속성
   */
  id?: string;
  /**
   * 둘러싸는 레이블 요소에 사용할 텍스트 또는 요소
   */
  label?: React.ReactNode;
  /**
   * 라벨 하위 레이블 요소에 사용할 텍스트 또는 요소
   */
  subLabel?: React.ReactNode;
  /**
   * `input` 구성 요소의 `name` 속성
   */
  name?: string;
  /**
   * `true`인 경우 구성요소는 읽기 전용
   * @default false
   */
  readOnly?: boolean;
  /**
   * `true`인 경우 `input` 요소가 필요
   * @default false
   */
  required?: boolean;
  /**
   * 슬롯 커스텀 속성
   */
  slotProps?: {
    root?: React.ComponentPropsWithRef<"label">;
    checkbox?: React.ComponentPropsWithRef<"span">;
    input?: React.ComponentPropsWithRef<"input">;
    labelWrapper?: React.ComponentPropsWithRef<"span">;
    label?: React.ComponentPropsWithRef<"span">;
    subLabel?: React.ComponentPropsWithRef<"span">;
  };

  /**
   * 구성 요소의 값 DOM API는 이를 문자열로 변환
   * 브라우저는 "on"을 기본값으로 사용
   */
  value?: React.AllHTMLAttributes<HTMLInputElement>["value"];
  /**
   * 값이 변경되면 호출할 콜백함수.
   * @param {React.ChangeEvent<HTMLInputElement>} event 콜백 이벤트
   * @param {boolean} checked 새로운값
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}
