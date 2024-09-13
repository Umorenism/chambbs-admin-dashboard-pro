import React from "react";
import { FaFilter } from "react-icons/fa";
// import { FaDownload, FaFilter } from "react-icons/fa";

interface DepositDetail {
  id: number;
  blockchain: string;
  currency: string;
  balance: number;
  address: string;
  privateKey: string;
}

const DepositDetailPage: React.FC = () => {
  const depositDetails: DepositDetail[] = [
    {
      id: 1,
      blockchain: "Ethereum",
      currency: "ETH",
      balance: 10.5,
      address: "0x123...abc",
      privateKey: "PrivKey1234",
    },
    {
      id: 2,
      blockchain: "Bitcoin",
      currency: "BTC",
      balance: 0.3,
      address: "1BvBM...xyz",
      privateKey: "PrivKey5678",
    },
    {
      id: 3,
      blockchain: "Bitcoin",
      currency: "BTC",
      balance: 0.3,
      address: "1BvBM...xyz",
      privateKey: "PrivKey5678",
    },
    {
      id: 4,
      blockchain: "Bitcoin",
      currency: "BTC",
      balance: 0.3,
      address: "1BvBM...xyz",
      privateKey: "PrivKey5678",
    },
    {
      id: 5,
      blockchain: "Bitcoin",
      currency: "BTC",
      balance: 0.3,
      address: "1BvBM...xyz",
      privateKey: "PrivKey5678",
    },
    {
      id: 6,
      blockchain: "Bitcoin",
      currency: "BTC",
      balance: 0.3,
      address: "1BvBM...xyz",
      privateKey: "PrivKey5678",
    },
    {
      id: 7,
      blockchain: "Bitcoin",
      currency: "BTC",
      balance: 0.3,
      address: "1BvBM...xyz",
      privateKey: "PrivKey5678",
    },
    {
      id: 8,
      blockchain: "Bitcoin",
      currency: "BTC",
      balance: 0.3,
      address: "1BvBM...xyz",
      privateKey: "PrivKey5678",
    },
    {
      id: 9,
      blockchain: "Bitcoin",
      currency: "BTC",
      balance: 0.3,
      address: "1BvBM...xyz",
      privateKey: "PrivKey5678",
    },
    {
      id: 10,
      blockchain: "Bitcoin",
      currency: "BTC",
      balance: 0.3,
      address: "1BvBM...xyz",
      privateKey: "PrivKey5678",
    },
  ];

  const handleWithdrawal = (id: number) => {
    console.log(`Initiating withdrawal for id: ${id}`);
  };

  return (
    <div className="bg-slate-200 min-h-screen flex flex-col p-4">
      <p className="text-xl mt-4">Kyc Deposite</p>
      <div className="bg-white min-h-screen p-4 mt-4">
        <div className="container mx-auto p-4">
          <div className="flex items-center j justify-between mb-6">
            <input
              type="text"
              placeholder="search.."
              className="w-[50%] py-2 rounded-md border outline-none p-2"
            />
            <p className="text-slate-600 font-bold gap-2 flex items-center">
              <FaFilter size={10} />
              Filter
            </p>
            {/* <p className="bg-slate-400 p-1 py-1 rounded-md text-sm gap-2 flex items-center">
              Download
              <FaDownload />
            </p> */}
          </div>
          <h1 className="text-2xl font-bold mb-4">Deposit History</h1>
          <table className="min-w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Blockchain</th>
                <th className="px-4 py-2 text-left">Currency</th>
                <th className="px-4 py-2 text-left">Balance</th>
                <th className="px-4 py-2 text-left">Address</th>
                <th className="px-4 py-2 text-left">Private Key</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {depositDetails.map((detail) => (
                <tr key={detail.id} className="border-b">
                  <td className="px-4 py-2">{detail.blockchain}</td>
                  <td className="px-4 py-2">{detail.currency}</td>
                  <td className="px-4 py-2">{detail.balance}</td>
                  <td className="px-4 py-2">{detail.address}</td>
                  <td className="px-4 py-2">{detail.privateKey}</td>
                  <td className="px-4 py-2 ">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
                      onClick={() => handleWithdrawal(detail.id)}
                    >
                      Withdraw
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DepositDetailPage;
