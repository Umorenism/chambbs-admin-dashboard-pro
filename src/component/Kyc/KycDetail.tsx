import React from "react";
import TableList from "./table";

const KycDetail = () => {
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col p-4">
      <p className="text-xl mt-4">Kyc Details</p>
      <div className="bg-white min-h-screen p-4 mt-4">
        <div className="flex gap-10 mb-4">
          <div className="border  p-4 py-4 rounded-md w-full">
            <h1>Disburst Amount</h1>
            <p>-45.09%</p>
            <h5>$206.66</h5>
          </div>
          <div className="border  p-4 py-4 rounded-md w-full">
            <h1>Amount Repaid</h1>
            <p>-35.09%</p>
            <h5>$7606.66</h5>
          </div>
          <div className="border  p-4 py-4 rounded-md w-full">
            <h1>Late Payment</h1>
            <p>-45.09%</p>
            <h5>$206.66</h5>
          </div>
          <div className="border  p-4 py-4 rounded-md w-full">
            <h1>At Risk</h1>
            <p>-45.09%</p>
            <h5>$206.66</h5>
          </div>
          <div className="border p-4 py-4 rounded-md w-full">
            <h1>Loses</h1>
            <p>-45.09%</p>
            <h5>$206.66</h5>
          </div>
        </div>
        <div className="grid bg-red-300 grid-cols-2 gap-2 p-2">
          <div className="bg-blue-300 min-h-screen p-2 w-full">
            <div className="flex items-center j justify-between">
              <input
                type="text"
                className="w-[50%] py-1 rounded-md border outline-none p-2"
              />
              <p>Filter</p>
              <p>Download</p>
            </div>
            <div>
              <TableList />
            </div>
          </div>
          <div className="bg-pink-300 min-h-screen">second</div>
        </div>
      </div>
    </div>
  );
};

export default KycDetail;
