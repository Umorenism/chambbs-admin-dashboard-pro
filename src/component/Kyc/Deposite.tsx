import React from "react";

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
    // Add more data as needed
  ];

  const handleWithdrawal = (id: number) => {
    console.log(`Initiating withdrawal for id: ${id}`);
    // Add your withdrawal logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Deposit Detail Dashboard</h1>
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
              <td className="px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
  );
};

export default DepositDetailPage;
