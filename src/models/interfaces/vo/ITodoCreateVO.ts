import { ITodoVO } from "./ITodoVO";

export interface ITodoCreateVO extends Omit<ITodoVO, "complete"> {}
