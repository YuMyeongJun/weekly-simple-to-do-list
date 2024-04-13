import {
    ChangeEvent,
    FocusEvent,
    forwardRef,
    KeyboardEvent,
    useRef,
  } from "react";
  
  import classNames from "classnames";
  
  import { IInputProps } from "./Input.types";
  import { inputClasses } from "./InputClasses";
  
  export const Input = forwardRef<HTMLInputElement, IInputProps>((args, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { isError, ...inputProps } = args;
    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.nativeEvent.isComposing) {
        return;
      }
      args.onKeyDown?.(e);
    };
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      args.onChange?.(e);
    };
  
    const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
      args.onBlur?.(e);
    };
  
    const inputClassName = classNames(
      `${args.className ?? ""} ${inputClasses.root} focus:ring-2 ring-[var(--bc-primary-color-light)] focus:border-[var(--bc-primary-color-main)]}`,
      {
        invalid: isError,
      },
    );
  
    return (
      <input
        {...inputProps}
        className={inputClassName}
        onKeyDown={args.onKeyDown ? handleKeyUp : undefined}
        ref={(current) => {
          if (ref) {
            if (typeof ref === "function") {
              ref(current);
            } else {
              ref.current = current;
            }
          }
          inputRef.current = current;
        }}
        onMouseDown={(e) => e.stopPropagation()}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        readOnly={args.readOnly}
        title={inputRef.current?.value}
        autoComplete="off"
      />
    );
  });
  