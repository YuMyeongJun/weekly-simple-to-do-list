import { Outlet } from "react-router";

export const DefaultLayout = () => {
  return (
    <div className="flex justify-center h-full grow overflow-y-auto">
      <Outlet />
    </div>
  );
};
