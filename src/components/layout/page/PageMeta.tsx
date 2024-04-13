import { memo } from "react";

export interface IPageMetaProps {
  title?: string;
  subTitle?: string;
}

const PageMeta = ({title, subTitle}: IPageMetaProps) => {
  return (
    <div className="w-96">
      <h1 className="title text-2xl font-semibold text-[#222222]">{title}</h1>
      <h2 className="sub-title text-lg text-[#8c8c8c]">{subTitle}</h2>
    </div>
  );
};

export default memo(PageMeta)