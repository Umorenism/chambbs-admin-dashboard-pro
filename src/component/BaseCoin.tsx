import React, { useState } from "react";
import { FaBtc } from "react-icons/fa";
import { Link } from "react-router-dom";

const BaseCoin = () => {
  const [change, setChange] = useState(false);

  const handleChange = () => {
    setChange(!change);
  };
  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm w-full p-2 border-r-2 flex items-center">
          <p className="h-5 w-5 bg-orange-600 rounded-full flex justify-center items-center text-white gap-1">
            <FaBtc />
          </p>
          Bitcoin
        </p>
        <p className="text-sm p-2 w-full border-r-2 ">BTC</p>
        <p className="text-sm text-start p-2 border-r-2 w-full">$523,43523</p>
        <p className="text-sm p-2 w-full border-r-2 ">2024-07-15 10:25:14</p>
        <p className="text-sm flex text-start p-2 border-r-2 w-full relative ">
          <div className="border rounded-full w-10 h-5 flex justify-center items-center py-2 relative">
            {change ? (
              <span
                className="bg-blue-600 h-4 w-4 rounded-full"
                onClick={handleChange}
              ></span>
            ) : (
              <span
                className="bg-red-600 h-4 w-4 rounded-full"
                onClick={handleChange}
              ></span>
            )}

            {/* <span
              className="bg-blue-600 h-4 w-4 rounded-full"
              onClick={handleChange}
            ></span> */}
          </div>
        </p>
        <p className="text-sm w-full text-start p-2 border-r-2 ">
          <Link to="/edittoken">
            <button className="border border-orange-500 px-3 rounded-md">
              Edit
            </button>
          </Link>
        </p>
      </div>
    </>
  );
};

export default BaseCoin;
