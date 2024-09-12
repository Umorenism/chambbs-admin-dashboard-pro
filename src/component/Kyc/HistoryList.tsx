import React from "react";

const HistoryList = () => {
  return (
    <div className="flex justify-between items-start mt-5 ">
      <h1 className="text-center items-center flex w-full">0.08345</h1>
      <h1 className="text-center items-center flex w-full">0.08345</h1>
      <h1 className="text-center items-center flex w-full">0.08345</h1>
      <h1 className="text-center items-center flex w-full">0.08345</h1>
      <h1 className="text-center items-center flex w-full">0.08345</h1>
      <h1 className="text-center items-center flex w-full">0.08345</h1>
      <h1>0.08345</h1>
      <div className="flex items-center gap-3 ml-5">
        <button className="bg-slate-800 p-1 text-sm text-white rounded-md">
          View
        </button>
        <button className="bg-green-800 p-1 text-sm text-white rounded-md">
          Approve
        </button>
        <button className="bg-red-800 p-1 text-sm text-white rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
};

export default HistoryList;
