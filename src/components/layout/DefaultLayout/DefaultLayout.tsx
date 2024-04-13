

import { Outlet, useNavigate } from 'react-router';
import { menus } from './menus';

export const DefaultLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-full w-[60px] overflow-hidden bg-[#313D4A] text-[#CACACA]">
        <div className="sticky top-0 w-[60px]">
          <div className="h-[60px]"></div>
          {menus.map((m) => (
            <div
              key={m.key}
              className="group flex cursor-pointer flex-col items-center gap-2 px-1 py-2 active:bg-[#222B34]"
              onClick={() => navigate(m.navigateUrl)}
            >
              <m.icon
                className="fill-[#CACACA] group-hover:fill-[#FFFFFF]"
                width={24}
                height={24}
              />
              <span className="text-[11px] selection:bg-transparent group-hover:text-white">
                {m.title}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-full grow overflow-y-auto bg-[#f2f2f7]">
        <div className="sticky top-0 z-10 flex h-[48px] items-center justify-between bg-white px-5">
          <div></div>
          <div className="flex items-center gap-4">
          <button className='border-0 bg-gray-100 text-[#38373E]'>abcd@lunasoft.co.kr</button>
            
          </div>
        </div>
        <div className="bg-[#f2f2f7]">
          <div className="p-4">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
