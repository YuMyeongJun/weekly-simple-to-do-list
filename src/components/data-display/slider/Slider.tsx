import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { ISliderProps } from "./Slider.types";
import classNames from "classnames";
import { remUtil } from "@modules/utils/rem";
import { sliderClasses } from "./SliderClasses";

export const Slider = forwardRef<HTMLDivElement, ISliderProps>((args) => {
  const { className, width, children, index = 0, limit = 1, gap } = args;

  const sliderWrapperRef = useRef<HTMLDivElement>(null);
  const sliderWrapperWidth = sliderWrapperRef.current?.offsetWidth;
  const SLIDER_WIDTH = width || sliderWrapperWidth || 300;

  const [current, setCurrent] = useState(0);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState(0);

  const rootClassName = classNames(sliderClasses.root, className);
  const _limit =
    limit > (children?.length ?? 0) ? children?.length ?? 0 : limit;
  const sliderWidth = (SLIDER_WIDTH ?? 0) / _limit;
  const remWidth = remUtil.rem(sliderWidth);

  useEffect(() => {
    if (index > (children?.length ?? 0)) {
      setCurrent(0);
    } else {
      setCurrent(index || 0);
    }
  }, [index]);

  useEffect(() => {
    if (sliderWrapperRef.current && sliderWrapperRef.current?.scrollTo) {
      sliderWrapperRef.current?.scrollTo({
        left: current * sliderWidth,
      });
    }
  }, [current]);

  const handleOnDargStart = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setIsDrag(true);
    if (sliderWrapperRef.current) {
      setStartX(e.pageX + sliderWrapperRef.current?.scrollLeft);
    }
  };
  const handleOnDragEnd = () => {
    setIsDrag(false);
  };

  const handleOnDragMode = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (isDrag && sliderWrapperRef.current) {
        const deltaX = startX - e.pageX;
        sliderWrapperRef.current.scrollLeft = deltaX;
      }
    },
    [isDrag, startX],
  );

  return (
    <div
      className={classNames("overflow-auto", rootClassName)}
      ref={sliderWrapperRef}
    >
      <div
        role="presentation"
        style={{
          width: remWidth,
        }}
        className={sliderClasses.component}
      >
        <div
          data-index={index}
          data-limit={limit}
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
                  width: remWidth,
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
