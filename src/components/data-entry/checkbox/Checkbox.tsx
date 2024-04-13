import * as React from "react";
import { useControlled } from "@hooks/useControlled";
import { composeRef } from "@modules/utils/composeRef";
import { createChainedFunction } from "@modules/utils/createChainedFunction";
import classNames from "classnames";

import { CheckboxProps } from "./Checkbox.types";
import { checkboxClasses as classes } from "./CheckboxClasses";
import { ICCheckboxOutlineBlankRounded, ICCheckboxRounded } from "@assets/icon";

const defaultCheckedIcon = <ICCheckboxRounded />;
const defaultUncheckedIcon = <ICCheckboxOutlineBlankRounded />;

export const Checkbox = React.forwardRef(function Checkbox(
  props: CheckboxProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const {
    checked: checkedProp,
    defaultChecked,

    disabled = false,
    id: idOverride,
    name: nameProp,
    slotProps = {},
    label,
    subLabel,
    onChange: onChangeProp,
    ...inputProps
  } = props;

  const defaultId = React.useId();
  const id = idOverride ?? defaultId;

  let name = nameProp;

  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    defaultValue: defaultChecked,
  });

  const rootSlot = slotProps.root ?? {};
  const checkboxSlot = slotProps.checkbox ?? {};
  const inputSlot = slotProps.input ?? {};
  const labelWrapperSlot = slotProps.labelWrapper ?? {};
  const labelSlot = slotProps.label ?? {};
  const subLabelSlot = slotProps.subLabel ?? {};

  const rootClassName = classNames(
    classes.root,
    {
      // checked
      [classes.checked]: checked,
    },
    rootSlot.className,
  );

  const inputRef = composeRef(inputSlot.ref, ref);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }

    setCheckedState(event.target.checked);
    onChangeProp?.(event, event.target.checked);
  };

  const onChange = createChainedFunction(handleChange);

  let icon = defaultUncheckedIcon;

  if (checked) {
    icon = defaultCheckedIcon;
  }
  return (
    <label {...rootSlot} className={rootClassName} htmlFor={id}>
      <span
        {...checkboxSlot}
        className={classNames(classes.checkbox, checkboxSlot.className)}
      >
        <input
          {...inputProps}
          {...inputSlot}
          type="checkbox"
          ref={inputRef}
          id={id}
          name={name}
          checked={checkedProp}
          defaultChecked={defaultChecked}
          className={classNames(classes.input, inputSlot.className)}
          onChange={disabled ? undefined : onChange}
        />
      </span>
      <span
        className={classNames(classes.labelWrpper, labelWrapperSlot.className)}
      >
        {label && (
          <span className={classNames(classes.label, labelSlot.className)}>
            {label}
          </span>
        )}
        {subLabel && (
          <span
            className={classNames(classes.subLabel, subLabelSlot.className)}
          >
            {subLabel}
          </span>
        )}
      </span>
    </label>
  );
});
