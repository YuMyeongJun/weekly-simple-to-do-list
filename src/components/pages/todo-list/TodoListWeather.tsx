import { Slider } from "@components/data-display";
import { Flex } from "@components/layout";
import { useWeatherListQuery } from "@hooks";
import { weatherLabel } from "@models";
import { dateUtils } from "@modules";
import classNames from "classnames";
import { Children } from "react";
import ReactLoading from "react-loading";

export const TodoListWeather = () => {
  const {
    query: { data, isFetching },
  } = useWeatherListQuery();
  const nowDate = new Date();
  return (
    <>
      {isFetching ? (
        <div className="flex justify-center">
          <ReactLoading type="spin" width={30} height={30} color="black" />
        </div>
      ) : (
        <Slider
          index={nowDate.getDay() === 0 ? 6 : nowDate.getDay()}
          className="overflow-auto"
          limit={4}
          gap={10}
        >
          {Children.toArray(
            data?.map((item) => {
              return (
                <Flex
                  vertical
                  align="center"
                  justify="center"
                  className={classNames(
                    "min-h-36 text-sm bg-[var(--weekly-secondary-color-light)]",
                    {
                      "font-bold":
                        dateUtils.convertDateToYYYYMMDDFormat(nowDate) ===
                        dateUtils.convertDateToYYYYMMDDFormat(item.date),
                    },
                  )}
                >
                  <div>
                    {dateUtils.convertDateToBanksaladDateWeekFormat(item.date)}
                  </div>
                  <div
                    title={weatherLabel[item.weather]}
                    data-weather={item.weather}
                    className="truncate max-w-[70px] hover:text-clip hover:max-w-fit hover:whitespace-normal"
                  >
                    ({weatherLabel[item.weather]})
                  </div>
                  <div>{item.temp}도</div>
                </Flex>
              );
            }),
          )}
        </Slider>
      )}
    </>
  );
};
