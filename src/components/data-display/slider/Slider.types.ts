import { HTMLAttributes } from "react";

export interface ISliderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * 슬라이더의 넓이(지정하지 않을 경우 slider-component의 전체 넓이로 지정)
   */
  width?: number;

  /**
   * 슬라이더에 들어갈 슬라이드 내용들
   */
  children?: React.ReactNode[];

  /**
   * 슬라이드가 시작하는 인덱스(index = 3 => 3번 인덱스 슬라이드부터 시작)
   * @default 0
   */
  index?: number;

  /**
   *  보여줄 슬라이드의 갯수
   */
  limit?: number;

  /**
   * readonly 속성
   */
  readOnly?: boolean;

  /**
   * 슬라이더 간격
   */
  gap?: React.CSSProperties["gap"];
}
