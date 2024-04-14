import { attachPrefixClasses } from "@modules/utils/generatePrefixClasses";

const classes = {
  root: "",
} as const;

export const buttonClasses = attachPrefixClasses(classes, "btn", false);

export type ButtonClasses = typeof buttonClasses;
