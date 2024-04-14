import * as React from "react";
import { useControlled } from "@hooks/useControlled";
import classNames from "classnames";

import { ICheckboxProps } from "./Checkbox.types";
import { checkboxClasses as classes } from "./CheckboxClasses";
import { forwardRef } from "react";

export const Checkbox = forwardRef<HTMLElement, ICheckboxProps>((args) => {
  const {
    checked: checkedProp,
    defaultChecked,
    disabled = false,
    id: idOverride,
    name,
    slotProps = {},
    label,
    subLabel,
    onChange: onChangeProp,
    ...inputProps
  } = args;

  const defaultId = React.useId();
  const id = idOverride ?? defaultId;
  const [checked, setChecked] = useControlled({
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }

    setChecked(event.target.checked);
    onChangeProp?.(event, event.target.checked);
  };

  const onChange = handleChange;
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
          ref={inputSlot.ref}
          id={id}
          name={name}
          checked={checkedProp}
          defaultChecked={defaultChecked}
          className={classNames(classes.input, inputSlot.className)}
          onChange={disabled ? undefined : onChange}
        />
      </span>
      <span
        className={classNames(classes.labelWrapper, labelWrapperSlot.className)}
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
