import { useState } from "react";
import GlobalInput from "./Input";
import SelectInput from "./SelectInput";
import Button from "./Globalbtn/GlobalButoon";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const EditToken = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState("option1");

  const options = [
    { value: "option1", label: "Option 1" },
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
    <div className="bg-slate-200 min-h-screen flex flex-col p-4">
      <div className="bg-white min-h-screen p-4 mt-4">
        <p className="text-xl mt-4 mb-4">Edit Tokens</p>
        <hr />
        <div className="w-full flex justify-center items-center py-4">
          <div className="border w-[400px] min-h-[150px] mt-6 flex justify-center items-center bg-gray-200 border-slate-900 text-slate-800 flex-col">
            <IoCloudUploadOutline size={25} />
            <h1 className="py-2"> Upload Cions icons</h1>
          </div>
        </div>
        <div className="w-full gap-10 flex justify-center items-center py-4 ">
          <div className="flex flex-col">
            <div className="flex gap-10">
              <GlobalInput
                label="Token Name"
                name="name"
                type="text"
                value={inputValue}
                placeholder="Token name"
                onChange={handleInputChange}
              />
              <GlobalInput
                label="Symbol"
                name="name"
                type="text"
                value={inputValue}
                placeholder="symbol"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex gap-10">
              <SelectInput
                label="Select an option"
                options={options}
                value={selectedOption}
                onChange={setSelectedOption}
              />
              <GlobalInput
                label="Token pair"
                name="name"
                type="text"
                value={inputValue}
                placeholder="$5433,9986554"
                onChange={handleInputChange}
              />
            </div>

            <div className="flex gap-10">
              <GlobalInput
                label="Token type"
                name="name"
                type="text"
                value={inputValue}
                placeholder="Token type"
                onChange={handleInputChange}
              />
              <GlobalInput
                label="Contract address"
                name="name"
                type="text"
                value={inputValue}
                placeholder="contract address"
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full gap-10 flex justify-center items-center py-4 ">
              <Button
                label={loading ? "loading.." : "Updated"}
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

export default EditToken;
