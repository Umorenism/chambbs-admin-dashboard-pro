import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaBtc } from "react-icons/fa";
import { TfiStatsUp } from "react-icons/tfi";
import { useState } from "react";

const TopTrade = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  return (
    <div className="mt-5 w-[80%]  p-4">
      <div className="flex justify-between items-center p-2 rounded-md">
        <p className="text-xl font-semibold">Top Trading Pairs</p>
        <div className="flex items-center gap-4 relative">
          <div className="flex gap-4">
            <p className="bg-slate-400 rounded-md p-1 flex items-center">
              USD <MdOutlineArrowDropDown onClick={handleClick2} />
            </p>
            <p className="bg-slate-400 rounded-md p-1 flex items-center">
              24H <MdOutlineArrowDropDown onClick={handleClick} />
            </p>
          </div>
          {open && (
            <div className="absolute left-0 top-8 bg-gray-800 rounded-md py-4 w-32">
              hh
            </div>
          )}
          {open2 && (
            <div className="absolute left-0 top-8 bg-gray-800 rounded-md py-4 w-32">
              hh
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center bg-white p-2 rounded-md mt-4">
        <p className="border-r-2 p-1">CURRENCY NAME</p>
        <p className="border-r-2 p-1">PRICE</p>
        <p className="border-r-2 p-1">24HR CHANGE</p>
        <p className="border-r-2 p-1">STATICS</p>
        <p className="border-r-2 p-1">TRADE VOLUME</p>
        <p className="border-r-2 p-1">EXCHANGE</p>
      </div>
      <div className="flex justify-between items-center bg-white p-2 rounded-md mt-4">
        <div className="flex items-center gap-2">
          <p className="h-8 w-8 text-white rounded-full flex items-center justify-center bg-orange-600">
            <FaBtc />
          </p>
          <p className="border-r-2 p-1">BTC/USDT</p>
        </div>
        <p className="border-r-2 p-1">$18,008</p>
        <p className="border-r-2 p-1">+2,008</p>
        <p className="border-r-2 p-1">
          <TfiStatsUp size={30} />
        </p>
        <p>$232,32876</p>
      </div>
      <div className="flex justify-between items-center bg-white p-2 rounded-md mt-4">
        <div className="flex items-center gap-2">
          <p className="h-8 w-8 text-white rounded-full flex items-center justify-center bg-green-600">
            <FaBtc />
          </p>
          <p className="border-r-2 p-1">CHAMB/USDT</p>
        </div>
        <p className="border-r-2 p-1">$18,008</p>
        <p className="border-r-2 p-1">+2,008</p>
        <p className="border-r-2 p-1">
          <TfiStatsUp size={30} />
        </p>
        <p>$232,32876</p>
      </div>
      <div className="flex justify-between items-center bg-white p-2 rounded-md mt-4">
        <div className="flex items-center gap-2">
          <p className="h-8 w-8 text-white rounded-full flex items-center justify-center bg-orange-600">
            <FaBtc />
          </p>
          <p className="border-r-2 p-1">ETH/USDT</p>
        </div>
        <p className="border-r-2 p-1">$18,008</p>
        <p className="border-r-2 p-1">+2,008</p>
        <p className="border-r-2 p-1">
          <TfiStatsUp size={30} />
        </p>
        <p>$232,32876</p>
      </div>
    </div>
  );
};

export default TopTrade;
