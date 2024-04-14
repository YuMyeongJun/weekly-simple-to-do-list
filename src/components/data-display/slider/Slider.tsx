import React, { forwardRef, useEffect, useRef, useState } from "react";

import { remUtil } from "@modules/utils/rem";
import classNames from "classnames";

import { ISliderProps } from "./Slider.types";
import { sliderClasses } from "./SliderClasses";

export const Slider = forwardRef<HTMLDivElement, ISliderProps>((args) => {
  const { className, width, children, index = 0, limit = 1, gap } = args;

  const sliderWrapperRef = useRef<HTMLDivElement>(null);
  const sliderWrapperWidth = sliderWrapperRef.current?.offsetWidth;
  const SLIDER_WIDTH = width ?? sliderWrapperWidth;

  const [current, setCurrent] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const rootClassName = classNames(sliderClasses.root, className);

  useEffect(() => {
    if (!index) {
      setCurrent(0);
    } else {
      setCurrent(index);
    }
  }, [index]);

  useEffect(() => {
    if (sliderWrapperRef.current && sliderWrapperRef.current?.scrollTo) {
      sliderWrapperRef.current?.scrollTo({
        left: current * ((SLIDER_WIDTH ?? 0) / limit),
      });
    }
  }, [current, SLIDER_WIDTH, limit]);

  const handleOnDargStart = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsDrag(true);
    if (sliderWrapperRef.current) {
      setStartX(e.pageX + sliderWrapperRef.current?.scrollLeft);
    }
  };
  const handleOnDragEnd = () => {
    setIsDrag(false);
  };

  const handleOnDragMode = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (isDrag && sliderWrapperRef.current) {
      sliderWrapperRef.current.scrollLeft = startX - e.pageX;
    }
  };

  return (
    <div className={classNames(rootClassName)} ref={sliderWrapperRef}>
      <div
        role="presentation"
        style={{
          width: `${remUtil.rem((SLIDER_WIDTH ?? 0) / limit)}`,
        }}
        className={sliderClasses.component}
      >
        <div
          style={{ display: "flex", gap: gap }}
          className={classNames(sliderClasses.contentWrapper)}
          onMouseDown={handleOnDargStart}
          onMouseUp={handleOnDragEnd}
          onMouseMove={(e) =>
            isDrag ? setTimeout(() => handleOnDragMode(e), 50) : undefined
          }
        >
          {children?.map((child, i) => {
            return (
              <div
                className="select-none"
                style={{
                  width: `${remUtil.rem((SLIDER_WIDTH ?? 0) / limit)}`,
                  flex: "none",
                }}
                key={`card-wrap-${i}`}
              >
                {child}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
