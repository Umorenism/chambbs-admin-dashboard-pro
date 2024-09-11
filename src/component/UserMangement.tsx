import { FaUser } from "react-icons/fa";
import ManagementList from "./ManagementList";
import UsersMangementCard from "./UserMangentCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
  const navigate = useNavigate();
  const list = [
    {
      name: "USER NAME",
      Recciver: "EMAIL ID",
      amount: "ROLE",
      fee: "STATUS",
      updated: "CREATED AT",
      active: "ACTIVITY",
    },
  ];

  const [selected, setSelected] = useState(true);
  const handleSelected = () => {
    setSelected(!selected);
    navigate("/usermanagementform");
  };
  return (
    <div className="flex flex-col min-h-screen bg-slate-100 p-4">
      <h1 className="text-lg font-bold">User Management</h1>
      <div className="flex w-full  gap-5 mt-4 max-w-[80%]">
        <div className="w-[30%]">
          <UsersMangementCard
            title=" Users"
            amount="443,432,5423"
            par="Total users"
            active="online"
            verified="Verified users"
            description="online"
            contact="540,542"
            count="22,644,5432"
          />
        </div>
        <div className="w-[50%]">
          <div className="w-full  rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">Active Users</h1>
              <div className="flex gap-4">
                <button className="border p-1 rounded-md">24H</button>
                <button className="border p-1 rounded-md bg-slate-300">
                  7D
                </button>
                <button className="border p-1 rounded-md">1M</button>
                <button className="border p-1 rounded-md">1Y</button>
              </div>
            </div>

            <div className="flex px-6 justify-between items-center">
              <div>
                <h1 className="text-slate-600">Active Users</h1>
                <p>23,554</p>
              </div>
              <h1 className="text-slate-600">Population</h1>
            </div>
            <div className="py-[20px] px-6">Graph</div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full bg-white min-h-screen">
        <div className="flex items-center gap-10">
          <h1
            className="flex items-center hover:text-orange-500 p-2 flex-col"
            onClick={handleSelected}
          >
            <FaUser className="text-yellow-400" />
            <h2 onClick={handleSelected}>User List</h2>
            <p className={`h-1 w-20 rounded-full bg-orange-400`}></p>
          </h1>

          <h1 className="flex items-center p-2 hover:text-orange-500 ">
            <FaUser className="text-green-500" />
            Add User
          </h1>
          <h1 className="flex items-center p-2 hover:text-orange-500 ">
            <FaUser className="text-orange-500" />
            Suspended User
          </h1>
          <h1 className="flex items-center p-2 hover:text-orange-500 ">
            <FaUser className="text-orange-500" />
            Deleted User
          </h1>
          <p></p>
        </div>
        <hr />
        <h1 className="text-xl p-4">Transaction</h1>
        <div className="flex items-center gap-4  p-4 rounded-lg">
          <select
            name=""
            id=""
            className="bg-gray-300 text-black p-2 rounded-full w-28"
          >
            <option value="">All</option>
          </select>
          <div className="flex-1">
            <input
              type="text"
              className="w-[30%] bg-gray-300 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="px-8 mt-4">
          {list.map((items) => (
            <div className="flex justify-between items-center">
              <h1 className="text-center">{items.name}</h1>
              <h1 className="text-center">{items.Recciver}</h1>
              <h1 className="text-center">{items.amount}</h1>
              <h1 className="text-center">{items.fee}</h1>
              <h1 className="text-center">{items.updated}</h1>
              <h1 className="text-center">{items.active}</h1>
            </div>
          ))}
        </div>
        <hr />
        <div className="px-8 mt-4">
          <ManagementList
            username="Jon steve"
            email="jonstev@gmail.com"
            role="User"
            status="Active"
            createdat="08 July 9:25:13"
          />
          <hr />
          <ManagementList
            username="Jon steve"
            email="jonstev@gmail.com"
            role="User"
            status="Active"
            createdat="08 July 9:25:13"
          />
          <hr />
          <ManagementList
            username="Jon steve"
            email="jonstev@gmail.com"
            role="User"
            status="Active"
            createdat="08 July 9:25:13"
          />
          <hr />
          <ManagementList
            username="Jon steve"
            email="jonstev@gmail.com"
            role="User"
            status="Active"
            createdat="08 July 9:25:13"
          />
          <hr />
          <ManagementList
            username="Jon steve"
            email="jonstev@gmail.com"
            role="User"
            status="Active"
            createdat="08 July 9:25:13"
          />
          <hr />
          <ManagementList
            username="Jon steve"
            email="jonstev@gmail.com"
            role="User"
            status="Active"
            createdat="08 July 9:25:13"
          />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
