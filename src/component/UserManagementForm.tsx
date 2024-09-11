import { FaUser } from "react-icons/fa";

import UsersMangementCard from "./UserMangentCard";
import GlobalInput from "./Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectInput from "./SelectInput";
import Button from "./Globalbtn/GlobalButoon";

const UserManagementForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("option1");

  const options = [
    { value: "Admin", label: "Admin" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    setLoading(true);
    navigate("/updatedbal");
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

      <div className="mt-10 w-full bg-white min-h-screen mb-4">
        <div className="flex items-center gap-10">
          <h1 className="flex items-center hover:text-orange-500 p-2 flex-col">
            <FaUser className="text-yellow-400" />
            <h2>User List</h2>
          </h1>

          <h1 className="flex items-center flex-col p-2 hover:text-orange-500 ">
            <FaUser className="text-green-500" />
            <h2>Add User</h2>
            <p className={`h-1 w-20 rounded-full bg-orange-400`}></p>
          </h1>
          <h1 className="flex items-center p-2 hover:text-orange-500 ">
            <FaUser className="text-orange-500" />
            Suspended User
          </h1>
          <h1 className="flex items-center p-2 hover:text-orange-500 ">
            <FaUser className="text-orange-500" />
            Deleted User
          </h1>
        </div>
        <hr />
        <h1 className="px-2 font-bold py-2">Add User</h1>
        <hr />
        <div className="w-full gap-10 flex justify-center items-center py-4 ">
          <div className="flex flex-col mt-20">
            <div className="flex gap-10 w-full">
              <GlobalInput
                label="First Name"
                name="name"
                type="text"
                value={inputValue}
                placeholder="Token name"
                onChange={handleInputChange}
              />
              <GlobalInput
                label="Last Name"
                name="name"
                type="text"
                value={inputValue}
                placeholder="Token name"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-10">
              <GlobalInput
                label="Email"
                name="name"
                type="text"
                value={inputValue}
                placeholder="email"
                onChange={handleInputChange}
              />
              <GlobalInput
                label="Phone Number"
                name="number"
                type="text"
                value={inputValue}
                placeholder="phone number"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <SelectInput
                label="Role"
                options={options}
                value={selectedOption}
                onChange={setSelectedOption}
              />
            </div>
            <div className="w-full gap-10 flex justify-center items-center py-4 ">
              <Button
                label={loading ? "loading.." : "save"}
                onClick={handleClick}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagementForm;
