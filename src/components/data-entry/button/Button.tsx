import React, { forwardRef, useRef } from "react";
import classNames from "classnames";

import { IButtonProps } from "./Button.types";
import { buttonClasses as classes } from "./buttonClasses";

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (args, ref) => {
    const {
      id,
      children,
      className,
      disabled = false,
      type,
      isError,
      onClick,
      ...buttonProps
    } = args;

    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const rootClassName = classNames(
      classes.root,
      {
        invalid: isError,
      },
      className,
    );

    return (
      <button
        type={type}
        id={id}
        className={rootClassName}
        onClick={
          disabled
            ? (e: React.MouseEvent) => {
                e.preventDefault();
              }
            : onClick
        }
        ref={(current) => {
          if (ref) {
            if (typeof ref === "function") {
              ref(current);
            } else {
              ref.current = current;
            }
          }
          buttonRef.current = current;
        }}
        {...buttonProps}
      >
        {children}
      </button>
    );
  },
);
