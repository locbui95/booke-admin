import React from "react";

interface DashboardCardProps {
  icon: any;
  count: number;
  title: string;
  statusTrueTitle?: string;
  statusFalseTitle?: string;
  statusTrueCount?: number;
  statusFalseCount?: number;
}

const DashboardCard = ({
  icon,
  count,
  title,
  statusTrueTitle,
  statusFalseTitle,
  statusTrueCount,
  statusFalseCount
}: DashboardCardProps) => (
  <div className="flex items-center py-8 mb-8 bg-white text-gray-600 shadow-md rounded-xl hover:bg-blue-400 hover:text-white hover:transition hover:delay-100 hover:ease-in-out hover:duration-700 ">
    <div className="flex items-center justify-center w-1/6 h-full text-4xl">
      {icon}
    </div>
    <div className="flex-grow text-center capitalize mx-7">
      <h4 className="mb-3 text-5xl font-semibold">{count}</h4>
      <p>{title}</p>
    </div>
    {statusTrueTitle || statusFalseTitle ? (
      <div className="flex-grow flex-col items-center justify-center">
        <div className="flex my-3">
          <h4 className="p-1 w-20 text-center border border-[#019707] rounded bg-[#019707] text-xs text-white">
            {statusTrueTitle}
          </h4>
          <span className="ml-2 font-semibold">{statusTrueCount}</span>
        </div>
        <div className="flex my-3">
          <h4 className="p-1 w-20 text-center border border-[#fb0b12] rounded bg-[#fb0b12] text-xs text-white">
            {statusFalseTitle}
          </h4>
          <span className="ml-2 font-semibold">{statusFalseCount}</span>
        </div>
      </div>
    ) : null}
  </div>
);

export default DashboardCard;

DashboardCard.defaultProps = {
  statusTrueTitle: false,
  statusFalseTitle: false,
  statusTrueCount: false,
  statusFalseCount: false
};
