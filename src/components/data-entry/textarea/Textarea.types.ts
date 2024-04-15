import { TextareaHTMLAttributes } from "react";

export interface ITextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * 최대 길이
   * @type number
   */
  maxLength?: number;

  /**
   * Input의 에러 유무
   * @default false;
   */
  isError?: boolean;
}
