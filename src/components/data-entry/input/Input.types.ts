import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input의 에러 유무
   * @default false
   */
  isError?: boolean;
}
