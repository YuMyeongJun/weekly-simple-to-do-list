import { ValueOf } from "./ValueOf";

export const weatherTypes = {
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "11": 11,
  "12": 12,
  "13": 13,
  "14": 14,
  "15": 15,
  "16": 16,
  "17": 17,
  "18": 18,
  "19": 19,
  "20": 20,
  "21": 21,
} as const;

export type WeatherType = ValueOf<typeof weatherTypes>;

export type WeatherLabelType = {
  [key in WeatherType]: string;
};

export const weatherLabel: WeatherLabelType = {
  [weatherTypes[1]]: "맑음",
  [weatherTypes[2]]: "맑음 (밤)",
  [weatherTypes[3]]: "구름조금 (낮)",
  [weatherTypes[4]]: "구름조금 (밤)",
  [weatherTypes[5]]: "구름많음 (낮)",
  [weatherTypes[6]]: "구름많음 (밤)",
  [weatherTypes[7]]: "흐림",
  [weatherTypes[8]]: "소나기",
  [weatherTypes[9]]: "비",
  [weatherTypes[10]]: "가끔 비, 한때 비",
  [weatherTypes[11]]: "눈",
  [weatherTypes[12]]: "가끔 눈, 한때 눈",
  [weatherTypes[13]]: "비 또는 눈",
  [weatherTypes[14]]: "가끔 비 또는 눈, 한때 비 또는 눈",
  [weatherTypes[15]]: "눈 또는 비",
  [weatherTypes[16]]: "가끔 눈 또는 비, 한때 눈 또는 비",
  [weatherTypes[17]]: "천둥번개",
  [weatherTypes[18]]: "연무",
  [weatherTypes[19]]: "안개",
  [weatherTypes[20]]: "박무",
  [weatherTypes[21]]: "황사",
} as const;
