import { Slider } from "@components/data-display";
import { Flex } from "@components/layout";
import { useWeatherListQuery } from "@hooks";
import { weatherLabel, WeatherType, weatherTypes } from "@models";
import { dateUtils } from "@modules";
import { Children } from "react";
import ReactLoading from "react-loading";

export const TodoListWeather = () => {
  const {
    query: { data, isFetching },
  } = useWeatherListQuery();

  return (
    <>
      {isFetching ? (
        <div className="flex justify-center">
          <ReactLoading type="spin" width={30} height={30} color="black" />
        </div>
      ) : (
        <Slider index={0} className="overflow-hidden" limit={4} gap={10}>
          {Children.toArray(
            data?.map((item) => {
              return (
                <Flex vertical align="center" justify="center" className="min-h-36 bg-[var(--weekly-secondary-color-light)]">
                  <div>
                    {dateUtils.convertDateToBanksaladDateWeekFormat(item.date)}
                  </div>
                  <div>{weatherLabel[item.weather]}</div>
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
