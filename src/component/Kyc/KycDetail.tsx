import React from "react";
import TableList from "./table";
import { FaDownload, FaFilter } from "react-icons/fa";

const KycDetail = () => {
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col p-4">
      <p className="text-xl mt-4">Kyc Details</p>
      <div className="bg-white min-h-screen p-4 mt-4">
        <div className="flex gap-10 mb-4">
          <div className="border  p-4 py-4 rounded-md w-full">
            <h1 className="font-serif text-2xl">Disburst Amount</h1>
            <p className="text-red-600">-45.09%</p>
            <h5 className="text-xl font-bold">$206.66</h5>
          </div>
          <div className="border  p-4 py-4 rounded-md w-full">
            <h1 className="font-serif text-2xl">Amount Repaid</h1>
            <p className="text-red-600">-35.09%</p>
            <h5 className="text-xl font-bold text-green-700">$7606.66</h5>
          </div>
          <div className="border  p-4 py-4 rounded-md w-full">
            <h1 className="font-serif text-2xl">Late Payment</h1>
            <p className="text-red-600">-45.09%</p>
            <h5 className="text-xl font-bold text-green-700">$206.66</h5>
          </div>
          <div className="border  p-4 py-4 rounded-md w-full">
            <h1 className="font-serif text-2xl">At Risk</h1>
            <p className="text-red-600">-45.09%</p>
            <h5 className="text-xl font-bold text-green-700">$206.66</h5>
          </div>
          <div className="border p-4 py-4 rounded-md w-full">
            <h1 className="font-serif text-2xl">Loses</h1>
            <p className="text-red-600">-45.09%</p>
            <h5 className="text-xl font-bold text-green-700">$206.66</h5>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-2 mt-10 gap-2 p-2">
          <div className="  p-2 w-full">
            <div className="flex items-center j justify-between mb-6">
              <input
                type="text"
                placeholder="search.."
                className="w-[50%] py-2 rounded-md border outline-none p-2"
              />
              <p className="text-slate-600 gap-2 flex items-center">
                <FaFilter size={10} />
                Filter
              </p>
              <p className="bg-slate-400 p-1 py-1 rounded-md text-sm gap-2 flex items-center">
                Download
                <FaDownload />
              </p>
            </div>
            <div>
              <TableList />
            </div>
          </div>
          <div className="bg-pink-300 ">second</div>
        </div>
      </div>
    </div>
  );
};

export default KycDetail;
