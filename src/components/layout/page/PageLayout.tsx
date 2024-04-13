import { IHasChildren } from "@models";
import { Flex } from "../flex";

export const PageLayout = ({ children }: IHasChildren) => {
  return (
    <Flex vertical gap={20} className="p-5">
      {children}
    </Flex>
  );
};
