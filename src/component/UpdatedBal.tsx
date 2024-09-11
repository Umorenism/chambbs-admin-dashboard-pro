import CardRow from "./CardRow";
import List from "./List";

import UsersCard from "./UsersCard";

const UpdatedBal = () => {
  const list = [
    {
      name: "USER",
      Recciver: "RECIEVER",
      amount: "AMOUNT",
      fee: "FEE",
      updated: "UPDATED",
      active: "ACTIVE",
      status: "STATUS",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-slate-100 p-4">
      <div className="flex w-full gap-5 ">
        <CardRow
          title="Token Balance"
          balance="12.8 BTC"
          amount={2.6514323}
          text="2.3%"
        />
        <CardRow
          title="Total Fee"
          balance="0.1 BTC"
          amount={5.543243}
          text="2.1%"
        />
        <CardRow
          title="Total Deposite"
          balance="243.1 BTC"
          amount={6.4325455}
          text="1.2%"
        />
        <CardRow
          title="Total Withdrawal"
          balance="1.2 BTC"
          amount={1.5432542}
          text="1.5%"
        />
      </div>
      <div className="flex w-full  gap-5 mt-4 max-w-[80%]">
        <div className="w-[30%]">
          <UsersCard
            title="Users"
            amount="443,432,5423"
            par="Holder"
            transaction="Transactions"
            description="Total Volume"
            contact="540,542"
            bal="22,644"
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
        <h1 className="text-xl p-4">Transaction</h1>
        <div className="flex items-center gap-4  p-4 rounded-lg">
          <select
            name=""
            id=""
            className="bg-gray-300 text-black p-2 rounded-full w-28"
          >
            <option value="">Filter</option>
          </select>
          <div className="flex-1">
            <input
              type="text"
              className="w-[30%] bg-gray-300 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
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
              <h1 className="text-center">{items.status}</h1>
            </div>
          ))}
        </div>
        <hr />
        <div className="px-8 mt-4">
          <List />
          <hr />
          <List />
          <hr />
          <List />
          <hr />
          <List />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default UpdatedBal;
