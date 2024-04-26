import React, { forwardRef, useRef } from "react";
import classNames from "classnames";

import { IButtonProps } from "./Button.types";
import { buttonClasses as classes } from "./buttonClasses";
import { composeRef } from "@modules";

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (args, ref) => {
    const { id, children, className, type, isError, onClick, ...buttonProps } =
      args;

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
        ref={composeRef(buttonRef, ref)}
        className={rootClassName}
        onClick={
          args.disabled
            ? (e: React.MouseEvent) => {
                e.preventDefault();
              }
            : onClick
        }
        {...buttonProps}
      >
        {children}
      </button>
    );
  },
);
