import Card from "./Card";
import TopTrade from "./TopTrade";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100 p-4">
      <div className="flex w-full gap-5">
        <div className="w-[20%] bg-white py-4 rounded-md shadow-lg">
          <div className="p-2">
            <p className="text-xl font-semibold">Total User Coin</p>
            <p className="py-2">$50.65432433</p>
            <p className="text-green-600">1.7%</p>
          </div>
        </div>
        <div className="w-[20%] bg-white py-4 rounded-md shadow-lg">
          <div className="p-2">
            <p className="text-xl font-semibold">Total Deposite</p>
            <p className="py-2">$50.65432433</p>
            <p className="text-green-600">1.7%</p>
          </div>
        </div>
        <div className="w-[20%] bg-white py-4 rounded-md shadow-lg">
          <div className="p-2">
            <p className="text-xl font-semibold">Total Withdrawal</p>
            <p className="py-2">$50.65432433</p>
            <p className="text-green-600">1.3%</p>
          </div>
        </div>
      </div>
      <Card />
      <TopTrade />
    </div>
  );
};

export default Dashboard;
