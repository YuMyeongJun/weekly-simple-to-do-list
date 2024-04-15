import React, { forwardRef, useCallback, useRef } from "react";

import classNames from "classnames";

import { ITextareaProps } from "./Textarea.types";
import { textareaClasses } from "./TextareaClasses";

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  (args, ref) => {
    const { readOnly, isError, ...textareaProps } = args;

    const handleTextArea = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        return args.onChange?.(e);
      },
      [args],
    );
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const resultClassName = classNames(textareaClasses.root, args.className, {
      invalid: isError,
    });

    return (
      <textarea
        {...textareaProps}
        className={resultClassName}
        onChange={handleTextArea}
        placeholder={args.placeholder}
        maxLength={args.maxLength}
        ref={(current) => {
          if (ref) {
            if (typeof ref === "function") {
              ref(current);
            } else {
              ref.current = current;
            }
          }
          textareaRef.current = current;
        }}
        readOnly={readOnly}
        autoComplete={args.autoComplete ? "true" : "false"}
        disabled={args.disabled}
      />
    );
  },
);
