import { attachPrefixClasses } from "@modules/utils/generatePrefixClasses/generatePrefixClasses";

const classes = {
  root: "",
} as const;

export const inputClasses = attachPrefixClasses(classes, "input", true);
