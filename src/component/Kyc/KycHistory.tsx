import { useState } from "react";
import HistoryList from "./HistoryList";

const list = [
  { name: "USDT" },
  { name: "RECIEPT ADDRESS" },
  { name: "ADDRESS HASHED" },
  { name: "AMOUNT" },
  { name: "EMAIL" },
  { name: "ADDRESS LOCATION" },
  { name: "DATE" },
  { name: "ACTION" },
];

// MODEL
const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-1/3">
        <p className="text-xl font-semibold mb-4">Approve Action</p>
        <p>Are you sure you want to approve this action?</p>
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const kycHistory = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApproveClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-slate-200 min-h-screen flex flex-col p-4">
      <p className="text-xl mt-4">Kyc</p>
      <div className="bg-white min-h-screen p-4 mt-4">
        <p className="text-2xl mt-4">Kyc History</p>
        <div className="flex justify-between items-center mb-4 p-3">
          <div></div>
          <div className="flex gap-5 mt-6">
            <div className="border w-[300px]">
              <input
                type="text"
                placeholder="search here.."
                className="w-[100%] pl-2 h-full py-2 outline-none border placeholder:pl-2"
              />
            </div>
            <button className="px-4 bg-slate-500 text-white py-1 rounded-md">
              Search
            </button>
          </div>
          <button className="px-4 bg-black text-white py-2 rounded-md">
            View All
          </button>
        </div>

        <div className="gap-10 py-4 px-6 flex justify-center items-center">
          <button className="bg-slate-900 border py-3 px-10 rounded-md text-white p-2">
            Withdraw
          </button>
          <button
            className="bg-slate-900 py-3 px-10 rounded-md text-white p-2"
            onClick={handleApproveClick}
          >
            Approve
          </button>
          <button className="bg-slate-900 py-3 px-10 rounded-md text-white p-2">
            Spot
          </button>
        </div>

        <div className="flex justify-between items-center mt-14">
          {list.map((l, index) => (
            <div key={index} className=" border-r-2">
              {l.name}
            </div>
          ))}
        </div>
        <hr />
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default kycHistory;
