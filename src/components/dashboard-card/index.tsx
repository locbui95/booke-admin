import React, { ReactElement } from "react";

interface DashboardCardProps {
  icon: ReactElement;
  count: number;
  title: string;
}
const DashboardCard = ({ icon, count, title }: DashboardCardProps) => (
  <div className="flex flex-col items-center justify-between ">
    <div className="text-3xl mb-3">{icon}</div>
    <h4 className="mb-3 text-5xl font-semibold">{count}</h4>
    <p>{title}</p>
  </div>
);

export default DashboardCard;
