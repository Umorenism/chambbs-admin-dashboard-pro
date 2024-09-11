import logo from "../asset/logo.png";
import { CiSearch } from "react-icons/ci";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState } from "react";

const Header: React.FC = () => {
  const [openTop, setOpenTop] = useState(false);

  const handleClick = () => {
    setOpenTop(!openTop);
  };
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white text-white shadow-lg flex items-center px-4">
      <div className=" w-full flex justify-between items-center">
        <div className="w-[20%] bg-slate-500">
          <img src={logo} alt="" className="h-10 " />
        </div>

        <div className=" w-[50%] flex items-center py-2 justify-between">
          <p className="text-xl text-black">Welcome Back,Admin</p>
          <div className="bg-slate-200 flex items-center  w-[70%] rounded-md p-2">
            <input
              type="text"
              className="w-full outline-none bg-transparent ml-2 text-slate-900"
              placeholder="Search."
            />
            <CiSearch size={25} className="text-slate-500" />
          </div>
        </div>
        <div className="w-[20%] relative flex items-center justify-around text-black">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-slate-700 rounded-full gap-4"></div>
            <p className="ml-2 font-serif">John Scot</p>
            <MdOutlineArrowDropDown size={25} onClick={handleClick} />
          </div>
          <div className="relative">
            <p className="h-5 w-5 rounded-full bg-red-500 text-white flex justify-center items-center absolute top-0 bottom-0 left-3 mb-3">
              1
            </p>
            <IoIosNotificationsOutline size={35} />
          </div>
          {openTop && (
            <div className="absolute rounded-md bg-slate-500 top-8 py-4 w-[200px]">
              open
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
