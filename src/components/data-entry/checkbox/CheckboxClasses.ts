import { attachPrefixClasses } from "@modules/utils/generatePrefixClasses/generatePrefixClasses";

const classes = {
  /** 루트 요소에 적용된 스타일 */
  root: "wrapper",
  /** 체크박스 요소에 적용되는 클래스 이름 */
  checkbox: "checkbox",
  /** 입력 요소에 적용되는 클래스 이름 */
  input: "input",
  /** 라벨 요소에 적용되는 클래스 이름 */
  labelWrpper: "label-wrapper",
  /** 라벨 요소에 적용되는 클래스 이름 */
  label: "label",
  /** Sub 라벨 요소에 적용되는 클래스 이름 */
  subLabel: "sub-label",
  /** 입력 구성 요소의 `checked` 클래스에 적용되는 상태 클래스 */
  checked: "checked",
  /** 입력 구성 요소의 비활성화된 클래스에 적용되는 상태 클래스 */
  disabled: "disabled",
  /** `indeterminate={true}`인 경우 루트 요소에 적용되는 상태 클래스 */
  indeterminate: "indeterminate",
  /** `color="primary"`인 경우 루트 요소에 적용되는 클래스 이름 */
  colorPrimary: "primary",
  /** `color="secondary"`인 경우 루트 요소에 적용되는 클래스 이름 */
  colorSecondary: "secondary",
  /** `color="success"`인 경우 루트 요소에 적용되는 클래스 이름 */
  colorSuccess: "success",
  /** `color="error"`인 경우 루트 요소에 적용되는 클래스 이름 */
  colorError: "error",
  /** `color="info"`인 경우 루트 요소에 적용되는 클래스 이름 */
  colorInfo: "info",
  /** `color="warning"`인 경우 루트 요소에 적용되는 클래스 이름 */
  colorWarning: "warning",
  /** `color="dark"`인 경우 루트 요소에 적용되는 클래스 이름 */
  colorDark: "dark",
  /** `size="sm"`인 경우 루트 요소에 적용되는 클래스 이름 */
  sizeSmall: "sm",
  /** `size="md"`인 경우 루트 요소에 적용되는 클래스 이름 */
  sizeMedium: "md",
  /** `size="lg"`인 경우 루트 요소에 적용되는 클래스 이름 */
  sizeLarge: "lg",
} as const;

export const checkboxClasses = attachPrefixClasses(classes, "checkbox", false);

export type CheckboxClasses = typeof checkboxClasses;
