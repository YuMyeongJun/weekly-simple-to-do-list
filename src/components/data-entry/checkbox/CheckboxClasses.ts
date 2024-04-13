import { attachPrefixClasses } from "@modules/utils/generatePrefixClasses/generatePrefixClasses";

const classes = {
  /** 루트 요소에 적용된 스타일 */
  root: "wrapper",
  /** 체크박스 요소에 적용되는 클래스 이름 */
  checkbox: "checkbox",
  /** 입력 요소에 적용되는 클래스 이름 */
  input: "input",
  /** 라벨 요소에 적용되는 클래스 이름 */
  labelWrapper: "label-wrapper",
  /** 라벨 요소에 적용되는 클래스 이름 */
  label: "label",
  /** Sub 라벨 요소에 적용되는 클래스 이름 */
  subLabel: "sub-label",
  /** 입력 구성 요소의 `checked` 클래스에 적용되는 상태 클래스 */
  checked: "checked",
  /** `color="dark"`인 경우 루트 요소에 적용되는 클래스 이름 */
  colorDark: "dark",
} as const;

export const checkboxClasses = attachPrefixClasses(classes, "checkbox", false);

export type CheckboxClasses = typeof checkboxClasses;
