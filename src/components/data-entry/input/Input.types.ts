import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * 최대 길이
   *
   */
  maxLength?: number;

  /**
   * Input의 에러 유무
   * @default false
   */
  isError?: boolean;

  /**
   * Input에서 Enter 입력 시 실행되는 함수
   * @param value
   * @returns
   */
  onPressEnter?: (value: string | undefined) => void;
}
