import { IHasChildren } from "@models";
import classNames from "classnames";
import { Flex } from "../flex";

export interface IPageSectionProps extends IHasChildren {
  wrapClassName?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
}

export const PageSection = ({
  wrapClassName,
  title,
  titleClassName,
  children,
}: IPageSectionProps) => {
  return (
    <div>
      <Flex className={classNames(wrapClassName)} justify="space-between">
        {title && (
          <div
            className={classNames(
              "mb-2.5 text-xl font-bold leading-normal",
              titleClassName,
            )}
          >
            {title}
          </div>
        )}
      </Flex>
      <div className="relative rounded-mdbg-white py-2">
        {children}
      </div>
    </div>
  );
};
