import { Link } from "react-router-dom";

const HistoryList = () => {
  const historyData = [
    {
      usdt: "0.08345",
      receiptAddress: "xyz123abc",
      addressHashed: "1a2b3c4d5e",
      amount: "500",
      email: "user@example.com",
      addressLocation: "USA",
      date: "2023-09-10",
      action: "Pending",
    },
  ];

  return (
    <div className="mt-5">
      {historyData.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center mb-4 gap-3"
        >
          <h1 className="text-center flex-grow flex items-center justify-center bg-slate-200">
            {item.usdt}
          </h1>
          <h1 className="text-center bg-slate-200 flex-grow flex items-center justify-center">
            {item.receiptAddress}
          </h1>
          <h1 className="text-center bg-slate-200 flex-grow flex items-center justify-center">
            {item.addressHashed}
          </h1>
          <h1 className="text-center bg-slate-200 flex-grow flex items-center justify-center">
            {item.amount}
          </h1>
          <h1 className="text-center bg-slate-200 flex-grow flex items-center justify-center">
            {item.email}
          </h1>
          <h1 className="text-center bg-slate-200 flex-grow flex items-center justify-center">
            {item.addressLocation}
          </h1>
          <h1 className="text-center bg-slate-200 flex-grow flex items-center justify-center">
            {item.date}
          </h1>
          <div className="flex items-center gap-3 ml-5">
            <button className="bg-green-600 px-3 py-1 text-sm text-white rounded-md">
              Approve
            </button>

            <Link to="/kycdetail">
              <button className="bg-slate-800 px-3 py-1 text-sm text-white rounded-md">
                View
              </button>
            </Link>

            <button className="bg-red-800 px-3 py-1 text-sm text-white rounded-md">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryList;
