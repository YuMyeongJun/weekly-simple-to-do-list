import { attachPrefixClasses } from "@modules/utils/generatePrefixClasses/generatePrefixClasses";

const classes = {
  root: "",
} as const;

export const textareaClasses = attachPrefixClasses(classes, "textarea", true);
