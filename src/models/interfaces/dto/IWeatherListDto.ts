import { WeatherType } from "@models/types";

export interface IWeatherListDto {
  /**
   * 날짜
   * @type Date
   */
  date: Date;
  /**
   * 날씨
   * @type number
   */
  weather: WeatherType;
  /**
   * 온도
   * @type number
   */
  temp: number;
}
