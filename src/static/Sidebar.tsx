import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";

const Sidebar: React.FC = () => {
  const [dropdown, setDropdown] = useState(false);
  const [token, setToken] = useState(false);

  const handleClick = () => {
    setDropdown(!dropdown);
  };
  const handleToken = () => {
    setToken(!token);
  };

  return (
    <aside className="fixed top-16 left-0 w-64 h-full bg-white text-black flex flex-col py-4 shadow-md">
      <nav className="mt-4 text-xl">
        <ul className="space-y-2 m-2 text-black">
          <li>
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 hover:bg-slate-200 text-black  rounded-md w-full "
            >
              <RxDashboard />
              Dashboard
            </Link>
          </li>
          <li>
            <button
              onClick={handleClick}
              className="block px-4 py-2 hover:bg-slate-200 text-black rounded-md w-full text-left"
            >
              Trading
            </button>
            {dropdown && (
              <div className="bg-slate-200 text-black mt-2 py-2 rounded-md shadow-lg">
                <ul>
                  <li>
                    <Link
                      to="/tradingbot"
                      className="block px-4 py-2 hover:bg-gray-300"
                    >
                      Trading Bot
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/tradingbal"
                      className="block px-4 py-2 hover:bg-gray-300"
                    >
                      Trade Balance
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link
                      to="/order"
                      className="block px-4 py-2 hover:bg-gray-300"
                    >
                      Order
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <button
              onClick={handleToken}
              className="block px-4 py-2 hover:bg-slate-200 text-black rounded-md w-full text-left"
            >
              <Link to="/coins">Coins</Link>
            </button>
          </li>
          <li>
            <button className="block px-4 py-2 hover:bg-slate-200 text-black rounded-md w-full text-left">
              <Link to="/usermanagement">User Management</Link>
            </button>
          </li>
          <li>
            <button className="block px-4 py-2 hover:bg-slate-200 text-black rounded-md w-full text-left">
              <Link to="/kychistory">Kyc</Link>
            </button>
          </li>

          <li>
            <Link
              to="/settings"
              className="block px-4 py-2 hover:bg-slate-200 text-black  rounded-md w-full"
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
