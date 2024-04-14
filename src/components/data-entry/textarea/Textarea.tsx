import React, { forwardRef, useCallback } from "react";

import classNames from "classnames";

import { ITextareaProps } from "./Textarea.types";
import { textareaClasses } from "./TextareaClasses";

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (args, ref) => {
    const { readOnly, isError, ...inputProps } = args;

    const handleTextArea = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        return args.onChange?.(e);
      },
      [args],
    );

    const resultClassName = classNames(textareaClasses.root, args.className, {
      invalid: isError,
    });

    return (
      <textarea
        {...inputProps}
        className={resultClassName}
        onChange={handleTextArea}
        placeholder={args.placeholder}
        maxLength={args.maxLength}
        ref={ref}
        readOnly={readOnly}
        autoComplete={args.autoComplete ? "true" : "false"}
        disabled={args.disabled}
      />
    );
  },
);
