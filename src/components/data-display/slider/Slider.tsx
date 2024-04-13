import React, { forwardRef, useEffect, useRef, useState } from "react";

import { remUtil } from "@modules/utils/rem";
import classNames from "classnames";

import { ISliderProps } from "./Slider.types";
import { sliderClasses } from "./SliderClasses";

export const Slider = forwardRef<HTMLDivElement, ISliderProps>((args, ref) => {
  const {
    className,
    width,
    children,
    index = 0,
    limit = 1,
    readOnly,
    gap,
    ...SliderProps
  } = args;

  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const carouselWrapperWidth = carouselWrapperRef.current?.offsetWidth;
  const CAROUSEL_WIDTH = width ?? carouselWrapperWidth;

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
  }, []);

  useEffect(() => {
    if (carouselWrapperRef.current && carouselWrapperRef.current?.scrollTo) {
      carouselWrapperRef.current?.scrollTo({
        left: current * ((CAROUSEL_WIDTH ?? 0) / limit),
      });
    }
  }, [current]);

  const handleOnDargStart = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsDrag(true);
    if (carouselWrapperRef.current) {
      setStartX(e.pageX + carouselWrapperRef.current?.scrollLeft);
    }
  };
  const handleOnDragEnd = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsDrag(false);
  };

  const handleOnDragMode = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (isDrag && carouselWrapperRef.current) {
      carouselWrapperRef.current.scrollLeft = startX - e.pageX;
    }
  };

  return (
    <div className={classNames(rootClassName)} ref={carouselWrapperRef}>
      <div
        role="presentation"
        style={{
          width: `${remUtil.rem((CAROUSEL_WIDTH ?? 0) / limit)}`,
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
                  width: `${remUtil.rem((CAROUSEL_WIDTH ?? 0) / limit)}`,
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
