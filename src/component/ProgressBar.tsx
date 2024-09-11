import React from "react";

const ProgressBar = () => {
  return (
    <div className="flex flex-col gap-4">
      {[{ percentage: "50%", color: "bg-blue-600" }].map(
        ({ percentage, color }) => (
          <div className="flex flex-col">
            <div className="flex items-center justify-between text-sm font-medium">
              <span>{percentage}</span>
            </div>
            <div className="relative w-full bg-gray-300 rounded-full h-1.5">
              <div
                className={`absolute top-0 left-0 h-full ${color} rounded-full`}
                style={{ width: percentage }}
              ></div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProgressBar;
