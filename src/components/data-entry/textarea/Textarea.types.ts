import { InputHTMLAttributes } from "react";

export interface ITextareaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  /**
   * 최대 길이
   * @type number
   */
  maxLength?: number;

  /**
   * Textarea의 최대 길이(길이 제한)
   * @type number
   */
  maxRows?: number;

  /**
   * Textarea의 최소 길이
   * @type number
   */
  minRows?: number;

  /**
   * Input의 에러 유무
   * @default false;
   */
  isError?: boolean;
}
