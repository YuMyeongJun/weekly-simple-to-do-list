// import useHttp from "@hooks/useHttp";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { faker } from "@faker-js/faker";
import { IWeatherListDto, WeatherType } from "@models";
import { dateUtils } from "@modules";

const queryKey = "todo-list";
const createWeatherList = (date: Date): IWeatherListDto => {
  return {
    date: date,
    weather: faker.number.int({ min: 1, max: 21 }) as WeatherType,
    temp: Number(faker.number.int({ min: -50, max: 50 })),
  };
};
export const useWeatherListQuery = () => {
  // const http = useHttp();
  const queryClient = useQueryClient();
  const query = useQuery<IWeatherListDto[]>({
    queryKey: [queryKey],
    // queryFn: () => http.get('/')
    queryFn: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const arr = dateUtils.thisWeekList().map((date) => {
            return createWeatherList(date);
          });
          resolve(arr);
        }, 500);
      });
    },
  });

  const invalidateQuery = () => {
    queryClient.invalidateQueries({ queryKey: [queryKey] });
  };

  return { query, invalidateQuery };
};
