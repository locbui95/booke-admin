import React, { ReactElement } from "react";

interface DashboardCardProps {
  icon: ReactElement;
  count: number;
  title: string;
  activeTitle?: string;
  notActiveTitle?: string;
  activeCount?: number;
  notActiveCount?: number;
}

const DashboardCard = ({
  icon,
  count,
  title,
  activeTitle,
  notActiveTitle,
  activeCount,
  notActiveCount
}: DashboardCardProps) => (
  <div className="flex items-center py-8 mb-8 bg-white text-gray-600 shadow-md rounded-xl hover:bg-blue-400 hover:text-white hover:transition hover:delay-100 hover:ease-in-out hover:duration-700 ">
    <div className="flex items-center justify-center w-1/6 h-full text-4xl">
      {icon}
    </div>
    <div className="flex-grow text-center capitalize mx-7">
      <h4 className="mb-3 text-5xl font-semibold">{count}</h4>
      <p>{title}</p>
    </div>
    {activeTitle || notActiveTitle ? (
      <div className="flex-grow flex-col items-center justify-center">
        <div className="flex my-3">
          <h4 className="p-1 w-20 text-center border border-[#019707] rounded bg-[#019707] text-xs text-white">
            {activeTitle}
          </h4>
          <span className="ml-2 font-semibold">{activeCount}</span>
        </div>
        <div className="flex my-3">
          <h4 className="p-1 w-20 text-center border border-[#fb0b12] rounded bg-[#fb0b12] text-xs text-white">
            {notActiveTitle}
          </h4>
          <span className="ml-2 font-semibold">{notActiveCount}</span>
        </div>
      </div>
    ) : null}
  </div>
);

export default DashboardCard;

DashboardCard.defaultProps = {
  activeTitle: "",
  notActiveTitle: "",
  activeCount: 0,
  notActiveCount: 0
};
