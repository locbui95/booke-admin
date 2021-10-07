import React from "react";

const StatusCard = () => {
  const a = "hí";
  return (
    <div className="flex items-center py-8 mb-8 bg-white shadow-md rounded-xl">
      <div className="flex items-center justify-center w-1/4 h-full ">icon</div>
      <div>
        <h4>Count</h4>
        <p>title</p>
      </div>
    </div>
  );
};

export default StatusCard;
