import { attachPrefixClasses } from "@modules/utils/generatePrefixClasses/generatePrefixClasses";

export const classes = {
  root: "",
  page: "page",
  component: "component",
  contentWrapper: "content-wrapper",
} as const;

export const sliderClasses = attachPrefixClasses(classes, "slider", true);
